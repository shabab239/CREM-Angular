import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Building, BuildingTypeOptions} from '../building.model';
import {BuildingService} from '../building.service';
import {ApiResponse} from '../../../util/api.response.model';
import {AlertUtil} from '../../../util/alert.util';
import {FormsModule} from "@angular/forms";
import {Project} from "../../project/project.model";
import {ProjectService} from "../../project/project.service";

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
        private buildingService: BuildingService,
        private projectService: ProjectService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects(): void {
        this.projectService.getAll().subscribe({
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
        this.buildingService.save(this.building).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project-management-page/building-list']);
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
