import { Component, OnInit } from '@angular/core';
import { ApiResponse } from "../../util/api.response.model";
import { AlertUtil } from "../../util/alert.util";
import { TransactionService } from "../transaction.service";
import { CurrencyPipe, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-cash-flow',
    standalone: true,
    templateUrl: './cash-flow.component.html',
    imports: [
        FormsModule,
        CurrencyPipe
    ],
    providers: [DatePipe],
    styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {
    startDate: Date | null = null;
    endDate: Date | null = null;
    cashFlow: any = null;

    constructor(
        private transactionService: TransactionService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        const today = new Date();
        this.startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        this.endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        this.loadCashFlow();
    }

    loadCashFlow(): void {
        if (!this.startDate || !this.endDate) {
            AlertUtil.error("Please select a valid date range.");
            return;
        }

        const formattedStartDate = this.datePipe.transform(this.startDate, 'dd-MM-yyyy');
        const formattedEndDate = this.datePipe.transform(this.endDate, 'dd-MM-yyyy');

        if (!formattedStartDate || !formattedEndDate) {
            AlertUtil.error("Invalid date format.");
            return;
        }

        this.transactionService
            .getCashFlowStatement(formattedStartDate, formattedEndDate)
            .subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.cashFlow = response.data.cashFlow;
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
