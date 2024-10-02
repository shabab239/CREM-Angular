import {Component, OnInit} from '@angular/core';
import {RawMaterialUsage} from "../model/raw-material-usage.model";
import {RawMaterial} from "../model/raw-material.model";
import {RawMaterialService} from "../raw-material.service";
import {AlertUtil} from "../../../../util/alert.util";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../util/api.response.model";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-raw-material-usage',
    standalone: true,
    imports: [
        DatePipe,
        NgForOf,
        RouterLink,
        FormsModule,
        NgIf
    ],
    templateUrl: './raw-material-usage.component.html',
    styleUrl: './raw-material-usage.component.scss'
})
export class RawMaterialUsageComponent implements OnInit {
    usages: RawMaterialUsage[] = [];
    showUsageForm: boolean = false;
    usage: RawMaterialUsage = new RawMaterialUsage();
    errors: { [key: string]: string } = {};

    rawMaterials: RawMaterial[] = [];
    stageId: number;

    constructor(
        private rawMaterialService: RawMaterialService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.stageId = this.route.snapshot.params['stageId'];
        this.loadUsagesByStageId();
        this.loadRawMaterials();
    }

    loadUsagesByStageId(): void {
        this.rawMaterialService.getAllUsagesByStageId(this.stageId).subscribe({
            next: response => {
                if (response && response.successful) {
                    this.usages = response.data['usages'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadRawMaterials(): void {
        this.rawMaterialService.getAll().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.rawMaterials = response.data['rawMaterials'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    toggleUsageForm(): void {
        this.showUsageForm = !this.showUsageForm;
    }

    saveUsage(): void {
        this.usage.stage.id = this.stageId;
        let apiResponse: Observable<ApiResponse> = this.rawMaterialService.saveRawMaterialUsage(this.usage);

        apiResponse.subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.showUsageForm = false;
                    this.loadUsagesByStageId();
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
