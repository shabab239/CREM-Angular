import {Component, OnInit} from '@angular/core';
import {Project} from "../project.model";
import {ProjectService} from "../project.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";

@Component({
    selector: 'app-project-view',
    standalone: true,
    imports: [],
    templateUrl: './project-view.component.html',
    styleUrl: './project-view.component.scss'
})

export class ProjectViewComponent implements OnInit {
    projectId: number;
    project: Project;

    constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.projectId = this.route.snapshot.params['id'];
        this.loadProjectDetails();
    }

    loadProjectDetails() {
        this.projectService.getProjectById(this.projectId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.project = response.data['project'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }
}
