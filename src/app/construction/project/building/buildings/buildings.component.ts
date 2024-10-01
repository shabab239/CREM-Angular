import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Building } from '../building.model';
import { ProjectService } from '../../project.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { AlertUtil } from '../../../../util/alert.util';

@Component({
    selector: 'app-buildings',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './buildings.component.html',
    styleUrl: './buildings.component.scss'
})
export class BuildingsComponent implements OnInit {
    buildings: Building[] = [];
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.loadBuildings();
    }

    loadBuildings(): void {
        this.projectService.getAllBuildings().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.buildings = response.data['buildings'];
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

    deleteBuilding(id: number): void {
        this.projectService.deleteBuildingById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadBuildings();
                    AlertUtil.success(response);
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
