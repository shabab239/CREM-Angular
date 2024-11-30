import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Unit, UnitTypeOptions, UnitStatusOptions } from '../unit.model';
import { ApiResponse } from '../../../util/api.response.model';
import { AlertUtil } from '../../../util/alert.util';
import { FormsModule } from "@angular/forms";
import { Project } from "../../project/project.model";
import { ProjectService } from "../../project/project.service";
import {Floor, FloorNameOptions} from "../../floor/floor.model";
import {Observable} from "rxjs";

@Component({
    selector: 'app-unit-form',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, FormsModule],
    templateUrl: './unit-form.component.html',
    styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {
    unit: Unit = new Unit();
    projects: Project[] = [];
    floors: Floor[] = [];

    unitTypeOptions = UnitTypeOptions;
    unitStatusOptions = UnitStatusOptions;
    errors: { [key: string]: string } = {};

    constructor(
        private projectService: ProjectService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadProjects();
        this.loadFloors();

        let unitId = this.route.snapshot.params['id'];
        if (unitId) {
            this.projectService.getUnitById(unitId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.unit = response.data['unit'];
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

    save(): void {
        let apiResponse: Observable<ApiResponse> = this.unit.id ?
            this.projectService.updateUnit(this.unit) :
            this.projectService.saveUnit(this.unit);

        apiResponse.subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project/units']);
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
