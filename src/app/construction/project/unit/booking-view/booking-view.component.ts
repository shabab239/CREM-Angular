import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';
import { BookingService } from '../booking.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { AlertUtil } from '../../../../util/alert.util';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Payment } from "../payment.model";
import {PaymentService} from "../payment.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-booking-view',
    standalone: true,
    templateUrl: './booking-view.component.html',
    imports: [
        DatePipe,
        NgForOf,
        RouterLink,
        FormsModule,
        NgIf
    ],
    styleUrls: ['./booking-view.component.scss']
})
export class BookingViewComponent implements OnInit {
    payments: Payment[] = [];
    booking: Booking = new Booking();
    unitId: number;
    showPaymentForm: boolean = false;
    newPayment: Payment = new Payment();
    errors: { [key: string]: string } = {};

    constructor(private bookingService: BookingService, private route: ActivatedRoute,
                private paymentService: PaymentService) {}

    ngOnInit(): void {
        this.unitId = this.route.snapshot.params['unitId'];
        this.loadBooking();
    }

    togglePaymentForm(): void {
        this.showPaymentForm = !this.showPaymentForm;
    }

    savePayment(): void {
        this.newPayment.booking = this.booking;
        this.newPayment.customer = this.booking.customer;
        this.paymentService.save(this.newPayment).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.newPayment = new Payment();
                    this.showPaymentForm = false;
                    this.loadPaymentsByCustomer(this.booking.customer.id);
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

    loadBooking(): void {
        this.bookingService.getByUnitId(this.unitId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.booking = response.data['booking'];
                    this.loadPaymentsByCustomer(this.booking.customer.id);
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

    loadPaymentsByCustomer(customerId: number): void {
        this.paymentService.getAllByCustomerId(customerId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.payments = response.data['payments'];
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

    getTotalPayments(): number {
    if (!this.payments || !Array.isArray(this.payments)) {
        return this.booking.amount;
    }
    return this.payments.reduce((total, payment) => total + payment.amount, 0) + this.booking.amount;
}

    getRemainingAmount(): number {
        return this.booking.unit.price - this.getTotalPayments();
    }
}
