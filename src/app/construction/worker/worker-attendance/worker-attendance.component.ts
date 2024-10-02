import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {WorkerService} from "../worker.service";
import {Worker} from "../worker.model";
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";
import {StageService} from "../../project/stage/stage.service";
import {ConstructionStage} from "../../project/stage/stage.model";
import {ProjectService} from "../../project/project.service";
import {attendanceStatusOptions, WorkerAttendance} from "../worker.attendance.model";

@Component({
    selector: 'app-worker-attendance',
    standalone: true,
    imports: [
        NgIf,
        RouterLink,
        FormsModule,
        NgForOf,
        NgClass
    ],
    templateUrl: './worker-attendance.component.html',
    styleUrl: './worker-attendance.component.scss'
})
export class WorkerAttendanceComponent implements OnInit {

    formDate: string = new Date().toISOString().substring(0, 10);
    attendanceDate: Date = new Date();

    stageOf: string;
    stageOfId: number;
    stageOfEntity: any;
    stageId: number;
    stage: ConstructionStage = new ConstructionStage();
    workers: Worker[] = [];
    attendances: WorkerAttendance[] = [];

    constructor(
        private workerService: WorkerService,
        private stageService: StageService,
        private projectService: ProjectService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.stageOf = this.route.snapshot.params['stageOf'];
        this.stageOfId = this.route.snapshot.params['stageOfId'];
        this.stageId = this.route.snapshot.params['stageId'];
        if (!this.stageOf || !this.stageOfId || !this.stageId) {
            AlertUtil.error('Invalid URL');
            return;
        }
        this.loadStage();
        this.getStageOfEntity();
        this.loadAttendanceByStageIdAndDate();
    }

    recordAttendance(attendanceId: number, attendance: string) {
        this.workerService.recordAttendance(attendanceId, attendance).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadAttendanceByStageIdAndDate();
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadStage() {
        this.stageService.getStageById(this.stageId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.stage = response.data['constructionStage'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadAttendanceByStageIdAndDate() {
        this.workerService.getAttendanceByStageIdAndDate(this.stageId, this.attendanceDate).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.workers = response.data['workers'];
                    this.attendances = response.data['attendances'];
                    console.log(this.attendances);
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    onFormDateChange(newDate: string) {
        this.attendanceDate = new Date(newDate);
        this.loadAttendanceByStageIdAndDate();
    }

    getStageOfEntity() {
        if (this.stageOf === 'building') {
            this.projectService.getBuildingById(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.stageOfEntity = response.data['building'];
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
        } else if (this.stageOf === 'floor') {
            this.projectService.getFloorById(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.stageOfEntity = response.data['floor'];
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
        } else if (this.stageOf === 'unit') {
            this.projectService.getUnitById(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.stageOfEntity = response.data['unit'];
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
}
