import {Component, OnInit} from '@angular/core';
import {Transaction} from "../transaction.model";
import {TransactionService} from "../transaction.service";
import {ApiResponse} from "../../util/api.response.model";
import {DatePipe, NgForOf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        RouterLink,
        DatePipe
    ],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit{
    transactions: Transaction[] = [];

    constructor(private transactionService: TransactionService) {
    }

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
}
