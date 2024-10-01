import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Floor } from '../floor.model';
import { ProjectService } from '../../project.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { AlertUtil } from '../../../../util/alert.util';

@Component({
    selector: 'app-floors',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './floors.component.html',
    styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {
    floors: Floor[] = [];
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.loadFloors();
    }

    loadFloors(): void {
        this.projectService.getAllFloors().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.floors = response.data['floors'];
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

    deleteFloor(id: number): void {
        this.projectService.deleteFloorById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadFloors();
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
