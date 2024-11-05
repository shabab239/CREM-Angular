import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Unit} from "../unit.model";
import {Floor} from "../../floor/floor.model";
import {Booking} from "../booking.model";
import {User} from "../../../../authentication/model/user.model";
import {ProjectService} from "../../project.service";
import {BookingService} from "../booking.service";
import {UserService} from "../../../../hr/user.service";
import {ApiResponse} from "../../../../util/api.response.model";
import {AlertUtil} from "../../../../util/alert.util";
import {TransactionService} from "../../../../accounting/transaction.service";
import {Transaction} from "../../../../accounting/model/transaction.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-invoice',
  standalone: true,
    imports: [
        RouterLink,
        NgForOf
    ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit{

    transactions: Transaction[] = [];
    groupTransactionId: string;

    constructor(
        private transactionService: TransactionService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.groupTransactionId = this.route.snapshot.params['groupTransactionId'];
        this.loadTransactionsByGroupTransactionId();
    }

    loadTransactionsByGroupTransactionId(): void {
        this.transactionService.getAllByGroupTransactionId(this.groupTransactionId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.transactions = response.data['transactions'];
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
