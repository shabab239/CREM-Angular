import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {Project} from "../project.model";
import {ProjectService} from "../project.service";
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";

@Component({
    selector: 'app-pm-projects-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './pm-projects-list.component.html',
    styleUrl: './pm-projects-list.component.scss'
})
export class PmProjectsListComponent implements OnInit{
    projects: Project[] = [];
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService
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
                    //AlertUtil.showError(response, this.alertService);
                }
            },
            error: error => {
                //AlertUtil.showError(error, this.alertService);
            }
        });
    }

    deleteProject(id: number): void {
        this.projectService.delete(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadProjects();
                    //AlertUtil.showSuccess(response, this.alertService);
                } else {
                    //AlertUtil.showError(response, this.alertService);
                }
            },
            error: error => {
                //AlertUtil.showError(error, this.alertService);
            }
        });
    }
}
