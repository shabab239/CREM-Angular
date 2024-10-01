import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Unit } from '../unit.model';
import { ProjectService } from '../../project.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { AlertUtil } from '../../../../util/alert.util';
import {Floor} from "../../floor/floor.model";

@Component({
    selector: 'app-units',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[] = [];
    floors: Floor[] = [];
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.loadUnits();
        this.loadFloors();
    }

    loadUnits(): void {
        this.projectService.getAllUnits().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.units = response.data['units'];
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

    deleteUnit(id: number): void {
        this.projectService.deleteUnitById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadUnits();
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
