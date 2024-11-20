import {Component, HostListener, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import {Transaction} from "../../accounting/model/transaction.model";
import {TransactionService} from "../../accounting/transaction.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";
import {User} from "../../authentication/model/user.model";
import {UserService} from "../../hr/user.service";

@Component({
    selector: 'app-c-customers',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, FileUploadModule, DatePipe, NgForOf],
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

    constructor(private userService: UserService) {

    }

    customers: User[] = [];

    ngOnInit(): void {
        this.loadCustomers();
    }

    loadCustomers(): void {
        this.userService.getAllCustomers().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.customers = response.data['users'];
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
