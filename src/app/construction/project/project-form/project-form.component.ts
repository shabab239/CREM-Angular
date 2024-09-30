import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Project, ProjectStatusOptions} from "../project.model";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {User} from "../../../authentication/model/user.model";
import {UserService} from "../../../hr/user.service";
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../project.service";
import {AlertUtil} from "../../../util/alert.util";

@Component({
    selector: 'app-pm-create-project',
    standalone: true,
    imports: [RouterLink, NgForOf, FormsModule, NgIf, NgClass],
    templateUrl: './project-form.component.html',
    styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {
    errors: { [key: string]: string } = {};

    projectStatusOptions = ProjectStatusOptions;
    project: Project = new Project();
    users: User[] = [];

    constructor(
        private userService: UserService,
        private projectService: ProjectService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.loadUsers();

        let projectId = this.route.snapshot.params['id'];
        if (projectId) {
            this.projectService.getById(projectId).subscribe({
                next: response => {
                    if (response && response.successful) {
                        this.project = response.data['project'];
                    } else {
                        this.errors = response?.errors || {};
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
        }
    }

    protected save(): void {
        this.projectService.save(this.project).subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project-management-page/projects-list']);
                } else {
                    this.errors = response?.errors || {};
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    private loadUsers(): void {
        this.userService.getAll().subscribe({
            next: response => {
                console.log(response);
                if (response && response.successful) {
                    this.users = response.data['users'];
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }


}
