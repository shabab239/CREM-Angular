import {Component, OnInit} from '@angular/core';
import {Account} from '../account.model';
import {AccountService} from '../account.service';
import {ApiResponse} from '../../util/api.response.model';
import {DatePipe, NgForOf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        RouterLink,
        DatePipe
    ],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit {
    accounts: Account[] = [];
    error: string | null = null;

    constructor(private accountService: AccountService) {
    }

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
}
