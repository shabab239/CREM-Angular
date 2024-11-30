import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {CustomizerSettingsService} from '../../../customizer-settings/customizer-settings.service';
import {ConstructionStage, StageStatus, StageStatusOptions} from "../stage.model";
import {CdkDropListGroup} from "@angular/cdk/drag-drop";
import {StageService} from "../stage.service";
import {ApiResponse} from "../../../util/api.response.model";
import {AlertUtil} from "../../../util/alert.util";
import {Worker} from "../../worker/worker.model";
import {WorkerService} from "../../worker/worker.service";
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../../project/project.service";

@Component({
    selector: 'app-pm-kanban-board',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, CdkDropListGroup, NgForOf, FormsModule],
    templateUrl: './stages.component.html',
    styleUrl: './stages.component.scss'
})
export class StagesComponent implements OnInit {

    isToggled = false;
    errors: { [key: string]: string } = {};
    showEditStage = false;
    showNewStage = false;
    showWorkers = false;
    currentStage: ConstructionStage | undefined;
    inProgressStages: ConstructionStage[] = [];
    notStartedStages: ConstructionStage[] = [];
    completedStages: ConstructionStage[] = [];
    stageOf: string;
    stageOfId: number;
    stageOfEntity: any;
    workers: Worker[] = [];
    newStage: ConstructionStage = new ConstructionStage();

    constructor(
        public themeService: CustomizerSettingsService,
        private stageService: StageService,
        private workerService: WorkerService,
        private projectService: ProjectService,
        private route: ActivatedRoute
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.stageOf = this.route.snapshot.params['stageOf'];
        this.stageOfId = this.route.snapshot.params['stageOfId'];
        if (!this.stageOf || !this.stageOfId) {
            AlertUtil.error('Invalid URL');
            return;
        }
        this.getStages();
    }

    toggleNewStage(status: string, dismiss: boolean) {
        if (dismiss) {
            this.newStage = new ConstructionStage();
        } else {
            this.newStage = new ConstructionStage();
            this.newStage.status = StageStatus[status as keyof typeof StageStatus];
            if (this.stageOf === 'building') {
                this.newStage.building!.id = this.stageOfId;
            }
            if (this.stageOf === 'floor') {
                this.newStage.floor!.id = this.stageOfId;
            }
            if (this.stageOf === 'unit') {
                this.newStage.unit!.id = this.stageOfId;
            }
        }
        this.showNewStage = !this.showNewStage;
    }

    toggleEditStage(stageId: any, dismiss: boolean) {
        if (dismiss) {
            this.newStage = new ConstructionStage();
        } else {
            this.stageService.getStageById(stageId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.newStage = response.data['constructionStage'];
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            })
        }
        this.showEditStage = !this.showEditStage;
    }

    saveStage() {
        this.stageService.saveStage(this.newStage).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.showNewStage = false;
                    this.newStage = new ConstructionStage();
                    this.getStages();
                    AlertUtil.success(response);
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

    updateStage() {
        this.stageService.updateStage(this.newStage).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.showEditStage = false;
                    this.newStage = new ConstructionStage();
                    this.getStages();
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

    deleteStage(stageId: number) {
        this.stageService.deleteStageById(stageId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.getStages();
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    toggleWorkers(stage: any) {
        this.currentStage = stage;
        if (this.currentStage) {
            this.loadWorkers(this.currentStage.id);
            this.loadAllWorkers();
        }
        this.showWorkers = !this.showWorkers;
    }

    addWorkerToStage(workerId: number) {
        if (this.currentStage?.id) {
            this.stageService.addWorkerToStage(this.currentStage.id, workerId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        if (this.currentStage) {
                            this.currentStage.workers = response.data['workers'];
                            console.log(this.currentStage.workers);
                        }
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

    isWorkerAssigned(workerId: number): boolean {
        return this.currentStage?.workers?.some(w => w.id === workerId) || false;
    }

    loadWorkers(stageId: number) {
        this.stageService.getAllWorkersByStageId(stageId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    if (this.currentStage) {
                        this.currentStage.workers = response.data['workers'];
                        console.log(this.currentStage.workers);
                    }
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadAllWorkers() {
        this.workerService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    if (this.currentStage) {
                        this.workers = response.data['workers'];
                        console.log(this.currentStage.workers);
                    }
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    calculateRemainingDays(startDate: Date, endDate: Date): number {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(start.getTime() - end.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    getStages() {
        if (this.stageOf === 'building') {
            this.stageService.getAllStagesByBuildingId(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        let allStages: ConstructionStage[] = response.data['constructionStages'];
                        this.inProgressStages = allStages.filter(s => s.status === 'IN_PROGRESS');
                        this.notStartedStages = allStages.filter(s => s.status === 'NOT_STARTED');
                        this.completedStages = allStages.filter(s => s.status === 'COMPLETED');
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
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
            this.stageService.getAllStagesByFloorId(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        let allStages: ConstructionStage[] = response.data['constructionStages'];
                        this.inProgressStages = allStages.filter(s => s.status === 'IN_PROGRESS');
                        this.notStartedStages = allStages.filter(s => s.status === 'NOT_STARTED');
                        this.completedStages = allStages.filter(s => s.status === 'COMPLETED');
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
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
            this.stageService.getAllStagesByUnitId(this.stageOfId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        let allStages: ConstructionStage[] = response.data['constructionStages'];
                        this.inProgressStages = allStages.filter(s => s.status === 'IN_PROGRESS');
                        this.notStartedStages = allStages.filter(s => s.status === 'NOT_STARTED');
                        this.completedStages = allStages.filter(s => s.status === 'COMPLETED');
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
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

    protected readonly StageStatusOptions = StageStatusOptions;
}
