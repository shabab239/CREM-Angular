import {Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { AlertUtil } from "../../../util/alert.util";
import { ProjectService } from "../../project/project.service";
import { Floor, FloorNameOptions } from "../floor.model";
import { Building } from "../../building/building.model";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../util/api.response.model";

@Component({
    selector: 'app-floor-form',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './floor-form.component.html',
    styleUrl: './floor-form.component.scss'
})
export class FloorFormComponent implements OnInit{
    errors: { [key: string]: string } = {};

    floorNameOptions = FloorNameOptions;
    floor: Floor = new Floor();
    buildings: Building[] = [];

    constructor(
        private projectService: ProjectService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadBuildings();

        let floorId = this.route.snapshot.params['id'];
        if (floorId) {
            this.projectService.getFloorById(floorId).subscribe({
                next: response => {
                    if (response && response.successful) {
                        this.floor = response.data['floor'];
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
        let apiResponse: Observable<ApiResponse> = this.floor.id ?
            this.projectService.updateFloor(this.floor) :
            this.projectService.saveFloor(this.floor);

        apiResponse.subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project/floors']);
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

    private loadBuildings(): void {
        this.projectService.getAllBuildings().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.buildings = response.data['buildings'];
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
