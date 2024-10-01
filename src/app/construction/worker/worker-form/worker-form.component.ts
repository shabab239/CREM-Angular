import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {BloodGroupOptions, Worker} from '../worker.model';
import {WorkerService} from '../worker.service';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";
import {Observable} from "rxjs";

@Component({
    selector: 'app-worker-form',
    standalone: true,
    imports: [RouterLink, NgForOf, FormsModule, NgIf, NgClass],
    templateUrl: './worker-form.component.html',
    styleUrl: './worker-form.component.scss'
})
export class WorkerFormComponent implements OnInit {
    errors: { [key: string]: string } = {};
    worker: Worker = new Worker();

    bloodGroupOptions = BloodGroupOptions;
    avatarFile: File;

    constructor(
        private workerService: WorkerService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        let workerId = this.route.snapshot.params['id'];
        if (workerId) {
            this.workerService.getById(workerId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.worker = response.data['worker'];
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

    onAvatarChange(event: any): void {
        if (event.target.files.length > 0) {
            this.avatarFile = event.target.files[0];
        }
    }

    save(): void {
        let apiResponse: Observable<ApiResponse> = this.worker.id ?
            this.workerService.update(this.worker, this.avatarFile) :
            this.workerService.save(this.worker, this.avatarFile);

        apiResponse.subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/workers']);
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
