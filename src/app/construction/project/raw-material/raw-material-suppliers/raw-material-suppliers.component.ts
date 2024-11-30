import {Component, OnInit} from '@angular/core';
import {RawMaterial} from "../model/raw-material.model";
import {Supplier} from "../model/supplier.model";
import {RawMaterialService} from "../raw-material.service";
import {SupplierService} from "../supplier.service";
import {ApiResponse} from "../../../../util/api.response.model";
import {AlertUtil} from "../../../../util/alert.util";
import {RawMaterialStock} from "../model/raw-material-stock.model";
import {Observable} from "rxjs";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-raw-material-suppliers',
    standalone: true,
    imports: [
        DatePipe,
        NgForOf,
        RouterLink,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './raw-material-suppliers.component.html',
    styleUrl: './raw-material-suppliers.component.scss'
})
export class RawMaterialSuppliersComponent implements OnInit {

    suppliers: Supplier[] = [];
    supplier: Supplier = new Supplier();
    showSupplierForm: boolean = false;
    errors: { [key: string]: string } = {};

    constructor(
        private supplierService: SupplierService
    ) {
    }

    ngOnInit(): void {
        this.loadSuppliers();
    }

    loadSuppliers(): void {
        this.supplierService.getAll().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.suppliers = response.data['suppliers'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    createSupplier(): void {
        let apiResponse: Observable<ApiResponse> = this.supplier.id ?
            this.supplierService.update(this.supplier) :
            this.supplierService.save(this.supplier);

        apiResponse.subscribe({
            next: response => {
                if (response && response.successful) {
                    this.supplier = new Supplier();
                    this.toggleSupplierForm();
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

    deleteSupplier(id: number): void {
        this.supplierService.deleteById(id).subscribe({
            next: response => {
                if (response && response.successful) {
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

    toggleSupplierForm(): void {
        this.showSupplierForm = !this.showSupplierForm;
    }

    showOrdersBySupplier(id: number) {

    }
}
