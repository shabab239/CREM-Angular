import { Component, OnInit } from '@angular/core';
import { Transaction } from "../model/transaction.model";
import { TransactionService } from "../transaction.service";
import { ApiResponse } from "../../util/api.response.model";
import { DatePipe, NgForOf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AlertUtil } from "../../util/alert.util";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        RouterLink,
        DatePipe
    ],
    providers: [DatePipe],
    templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
    transactions: Transaction[] = [];

    constructor(
        private transactionService: TransactionService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        this.loadTransactions();
    }

    loadTransactions(): void {
        this.transactionService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.transactions = response.data['transactions'];
                } else {
                    AlertUtil.error(response.message);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    downloadPDF(): void {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Transactions Report', 14, 20);
        doc.setFontSize(11);
        doc.text(`Generated on: ${this.datePipe.transform(new Date(), 'medium')}`, 14, 30);

        const tableColumn = ["SL", "Amount", "Date", "Transaction ID", "Particular", "Type", "Account"];
        const tableRows = this.transactions.map((item, index) => [
            index + 1,
            item.amount.toFixed(2),
            this.datePipe.transform(item.date, 'mediumDate'),
            item.groupTransactionId,
            item.particular,
            item.type,
            item.account.name
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 35,
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 },
            alternateRowStyles: { fillColor: [240, 240, 240] },
            margin: { top: 35 }
        });

        doc.save('transactions-report.pdf');
        AlertUtil.successText('PDF downloaded successfully!');
    }
}
