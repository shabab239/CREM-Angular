import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Building, BuildingTypeOptions} from '../building.model';
import {ApiResponse} from '../../../util/api.response.model';
import {AlertUtil} from '../../../util/alert.util';
import {FormsModule} from "@angular/forms";
import {Project} from "../../project/project.model";
import {ProjectService} from "../../project/project.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-building-form',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, FormsModule],
    templateUrl: './building-form.component.html',
    styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit {
    building: Building = new Building();
    projects: Project[] = [];
    buildingTypeOptions = BuildingTypeOptions;
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.loadProjects();

        let buildingId = this.route.snapshot.params['id'];
        if (buildingId) {
            this.projectService.getBuildingById(buildingId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.building = response.data['building'];
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

    loadProjects(): void {
        this.projectService.getAllProjects().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.projects = response.data['projects'];
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

    protected save(): void {
        let apiResponse: Observable<ApiResponse> = this.building.id ?
            this.projectService.updateBuilding(this.building) :
            this.projectService.saveBuilding(this.building);

        apiResponse.subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project/buildings']);
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
