import {Component, OnInit} from '@angular/core';
import {RawMaterialService} from "../raw-material.service";
import {AlertUtil} from "../../../../util/alert.util";
import {RawMaterialOrder, RawMaterialOrderStatus} from "../model/raw-material-order.model";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Supplier} from "../model/supplier.model";
import {SupplierService} from "../supplier.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../util/api.response.model";
import {RawMaterial} from "../model/raw-material.model";

@Component({
    selector: 'app-raw-material-orders',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        FormsModule,
        NgIf
    ],
    templateUrl: './raw-material-orders.component.html',
    styleUrl: './raw-material-orders.component.scss'
})
export class RawMaterialOrdersComponent implements OnInit {

    orders: RawMaterialOrder[] = [];
    showOrderForm: boolean = false;
    order: RawMaterialOrder = new RawMaterialOrder();
    showSupplierForm: boolean = false;
    supplier: Supplier = new Supplier();
    errors: { [key: string]: string } = {};

    rawMaterials: RawMaterial[] = [];
    suppliers: Supplier[] = [];

    orderStatusOptions = Object.values(RawMaterialOrderStatus);

    constructor(
        private rawMaterialService: RawMaterialService,
        private supplierService: SupplierService
    ) {
    }

    ngOnInit(): void {
        this.loadOrders();
        this.loadRawMaterials();
        this.loadSuppliers();
    }

    loadOrders(): void {
        this.rawMaterialService.getAllOrders().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.orders = response.data['orders'];
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
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadSuppliers(): void {
        this.supplierService.getAll().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.suppliers = response.data['suppliers'];
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    calculateTotalPrice(): void {
        if (this.order.quantity && this.order.unitPrice) {
            this.order.totalPrice = this.order.quantity * this.order.unitPrice;
        }
    }

    toggleSupplierForm(): void {
        this.showSupplierForm = !this.showSupplierForm;
    }

    toggleOrderForm(orderId?: number): void {
        if (orderId) {
            this.rawMaterialService.getOrderById(orderId).subscribe({
                next: response => {
                    if (response && response.successful) {
                        this.order = response.data['order'];
                        this.showOrderForm = true;
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
        }
        this.showOrderForm = !this.showOrderForm;
    }

    protected saveOrder(): void {
        let apiResponse: Observable<ApiResponse> = this.order.id ?
            this.rawMaterialService.updateOrder(this.order) :
            this.rawMaterialService.saveOrder(this.order);

        apiResponse.subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.showOrderForm = false;
                    this.loadOrders();
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

    deleteOrder(orderId: number): void {
        this.rawMaterialService.deleteOrderById(orderId).subscribe({
            next: response => {
                if (response && response.successful) {
                    this.loadOrders();
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
}
