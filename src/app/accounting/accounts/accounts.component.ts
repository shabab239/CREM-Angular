import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { AccountService } from '../account.service';
import { ApiResponse } from '../../util/api.response.model';
import { DatePipe, NgForOf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertUtil } from "../../util/alert.util";
import { BalanceFormatPipe } from "../../util/balance.pipe";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        RouterLink,
        DatePipe,
        BalanceFormatPipe
    ],
    providers: [DatePipe, BalanceFormatPipe],
    templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
    accounts: Account[] = [];
    error: string | null = null;

    constructor(
        private accountService: AccountService,
        private datePipe: DatePipe,
        private balanceFormat: BalanceFormatPipe
    ) {}

    ngOnInit(): void {
        this.loadAccounts();
    }

    loadAccounts(): void {
        this.accountService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.accounts = response.data['accounts'];
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
        doc.text('Accounts Report', 14, 20);
        doc.setFontSize(11);
        doc.text(`Generated on: ${this.datePipe.transform(new Date(), 'medium')}`, 14, 30);

        const totalBalance = this.accounts.reduce((sum, acc) => sum + acc.balance, 0);

        const tableColumn = ["SL", "Account Name", "Balance"];
        const tableRows = this.accounts.map((item, index) => [
            index + 1,
            item.name,
            this.balanceFormat.transform(item.balance)
        ]);

        tableRows.push(['', 'Total Balance', this.balanceFormat.transform(totalBalance)]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 35,
            styles: { fontSize: 10 },
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: { fillColor: [240, 240, 240] },
            footStyles: { fontStyle: 'bold' },
            margin: { top: 35 }
        });

        // Download PDF
        doc.save('accounts-report.pdf');
        AlertUtil.successText('PDF downloaded successfully!');
    }
}
