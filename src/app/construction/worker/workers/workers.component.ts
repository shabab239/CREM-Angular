import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../worker.service';
import {Worker} from '../worker.model';
import {NgFor, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";

@Component({
    selector: 'app-workers',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './workers.component.html',
    styleUrl: './workers.component.scss'
})
export class WorkersComponent implements OnInit {
    workers: Worker[] = [];
    errors: { [key: string]: string } = {};

    constructor(private workerService: WorkerService) {
    }

    ngOnInit(): void {
        this.loadWorkers();
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
}
