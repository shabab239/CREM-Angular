import {Component, OnInit} from '@angular/core';
import {Booking} from '../booking.model';
import {BookingService} from '../booking.service';
import {ApiResponse} from '../../../util/api.response.model';
import {AlertUtil} from '../../../util/alert.util';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Payment} from "../payment.model";
import {PaymentService} from "../payment.service";
import {FormsModule} from "@angular/forms";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
    providers: [DatePipe],
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
                private paymentService: PaymentService, private datePipe: DatePipe) {
    }

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
                    this.payments = response.data['bookingPayments'];
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

    downloadBookingDetails() {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Booking Invoice', 14, 20);

        doc.setFontSize(12);
        doc.text('Customer Details:', 14, 40);
        doc.setFontSize(10);
        doc.text(`Name: ${this.booking.customer.name}`, 14, 50);
        doc.text(`Email: ${this.booking.customer.email}`, 14, 57);
        doc.text(`Phone: ${this.booking.customer.cell}`, 14, 64);

        doc.setFontSize(12);
        doc.text('Unit Details:', 14, 80);
        doc.setFontSize(10);
        doc.text(`Unit: ${this.booking.unit.name}`, 14, 90);
        doc.text(`Booking Date: ${this.datePipe.transform(this.booking.bookingDate, 'mediumDate')}`, 14, 97);
        doc.text(`Unit Price: ${this.booking.unit.price}`, 14, 104);

        doc.setFontSize(12);
        doc.text('Payment History:', 14, 120);

        const tableColumn = ["Date", "Amount", "Transaction ID"];
        const tableRows = this.payments.map(payment => [
            this.datePipe.transform(payment.date, 'mediumDate'),
            payment.amount.toFixed(2),
            payment.groupTransactionId
        ]);

        const totalPaid = this.payments.reduce((sum, payment) => sum + payment.amount, 0);
        tableRows.push([
            'Total Paid',
            totalPaid.toFixed(2),
            ''
        ]);

        const remaining = this.booking.unit.price - totalPaid;
        tableRows.push([
            'Remaining Amount',
            remaining.toFixed(2),
            ''
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 130,
            styles: {fontSize: 8},
            headStyles: {fillColor: [41, 128, 185], textColor: 255},
            footStyles: {fillColor: [240, 240, 240], fontStyle: 'bold'},
            alternateRowStyles: {fillColor: [245, 245, 245]}
        });

        const pageHeight = doc.internal.pageSize.height;
        doc.setFontSize(8);
        doc.text('This is a computer generated document', 14, pageHeight - 10);
        doc.text(`Generated on: ${this.datePipe.transform(new Date(), 'medium')}`, 14, pageHeight - 15);

        doc.save(`booking-invoice-${this.booking.id}.pdf`);
        AlertUtil.successText('Invoice downloaded successfully');
    }

    downloadInvoice(payment: Payment) {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Payment Receipt', 14, 20);

        doc.setFontSize(10);
        doc.text(`Receipt No: ${payment.groupTransactionId}`, 14, 35);
        doc.text(`Date: ${this.datePipe.transform(payment.date, 'mediumDate')}`, 14, 42);

        doc.setFontSize(12);
        doc.text('Customer Details:', 14, 55);
        doc.setFontSize(10);
        doc.text(`Name: ${this.booking.customer.name}`, 14, 65);
        doc.text(`Email: ${this.booking.customer.email}`, 14, 72);
        doc.text(`Phone: ${this.booking.customer.cell}`, 14, 79);

        doc.setFontSize(12);
        doc.text('Payment Details:', 14, 95);

        const tableColumn = ["Description", "Amount"];
        const tableRows = [
            ["Unit Purchase Payment", payment.amount.toFixed(2)],
            ["Unit Name", this.booking.unit.name],
            ["Transaction ID", payment.groupTransactionId]
        ];

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 105,
            styles: {fontSize: 8},
            headStyles: {fillColor: [41, 128, 185], textColor: 255},
            alternateRowStyles: {fillColor: [245, 245, 245]}
        });

        const pageHeight = doc.internal.pageSize.height;
        doc.setFontSize(8);
        doc.text('This is a computer generated document', 14, pageHeight - 10);
        doc.text(`Generated on: ${this.datePipe.transform(new Date(), 'medium')}`, 14, pageHeight - 15);

        doc.save(`payment-receipt-${payment.groupTransactionId}.pdf`);
        AlertUtil.successText('Receipt downloaded successfully');
    }

    getTotalPayments(): number {
        return this.payments?.reduce((total, payment) => total + payment.amount, 0);
    }

    getRemainingAmount(): number {
        return this.booking.unit.price - this.getTotalPayments();
    }

}
