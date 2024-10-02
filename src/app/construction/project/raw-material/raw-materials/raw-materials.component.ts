import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe, NgFor, NgIf} from '@angular/common';
import {RawMaterial} from '../model/raw-material.model';
import {RawMaterialService} from '../raw-material.service';
import {ApiResponse} from "../../../../util/api.response.model";
import {AlertUtil} from "../../../../util/alert.util";
import {RawMaterialStock} from "../model/raw-material-stock.model";

@Component({
    selector: 'app-raw-materials',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, DatePipe],
    templateUrl: './raw-materials.component.html',
    styleUrl: './raw-materials.component.scss'
})
export class RawMaterialsComponent implements OnInit {
    rawMaterials: RawMaterial[] = [];
    //rawMaterialStocks: RawMaterialStock[] = [];
    errors: { [key: string]: string } = {};

    constructor(
        private rawMaterialService: RawMaterialService
    ) {
    }

    ngOnInit(): void {
        this.loadRawMaterials();
        this.loadRawMaterialStocks();
    }

    loadRawMaterials(): void {
        this.rawMaterialService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.rawMaterials = response.data['rawMaterials'];
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

    loadRawMaterialStocks(): void {
        this.rawMaterialService.getAllStocks().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    let rawMaterialStocks: RawMaterialStock[] = response.data['stocks'];
                    rawMaterialStocks.forEach(stock => {
                        this.rawMaterials.forEach(rawMaterial => {
                            if (stock.rawMaterial.id === rawMaterial.id) {
                                rawMaterial.stock = stock;
                            }
                        });
                    });
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    deleteRawMaterial(id: number): void {
        this.rawMaterialService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadRawMaterials();
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
