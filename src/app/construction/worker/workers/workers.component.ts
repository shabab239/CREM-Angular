import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../worker.service';
import {Worker} from '../worker.model';
import {NgFor, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";
import {StageStatusOptions} from "../../project/stage/stage.model";
import {FormsModule} from "@angular/forms";
import {WorkerAttendance} from "../worker.attendance.model";

@Component({
    selector: 'app-workers',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, FormsModule],
    templateUrl: './workers.component.html',
    styleUrl: './workers.component.scss'
})
export class WorkersComponent implements OnInit {
    workers: Worker[] = [];
    errors: { [key: string]: string } = {};

    showAllAttendance = false;
    attendanceDate: string = new Date().toISOString().substring(0, 10);
    attendances: WorkerAttendance[] = [];

    constructor(private workerService: WorkerService) {
    }

    ngOnInit(): void {
        this.loadWorkers();
    }

    onFormDateChange(newDate: string) {
        this.attendanceDate = newDate;
        this.getAttendanceByDate();
    }

    toggleShowAllAttendance(): void {
        if (this.showAllAttendance) {
            this.attendances = [];
            this.showAllAttendance = false;
        } else {
            this.getAttendanceByDate();
        }
    }

    getAttendanceByDate(): void {
        this.workerService.getAttendanceByDate(new Date(this.attendanceDate)).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.attendances = response.data['workerAttendances'];
                    this.showAllAttendance = true;
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadWorkers(): void {
        this.workerService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.workers = response.data['workers'];
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

    deleteWorker(id: number): void {
        this.workerService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadWorkers();
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

    protected readonly StageStatusOptions = StageStatusOptions;
}
