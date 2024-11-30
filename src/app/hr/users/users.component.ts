import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../authentication/model/user.model';
import {UserService} from "../user.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";
import {FormatRolePipe} from "../../util/role.pipe";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, RouterLink, FormatRolePipe],
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[] = [];

    user: User = new User();
    classApplied = false;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadUsers();
    }

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    loadUsers() {
        this.userService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.users = response.data.users;
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    saveUser() {
        this.userService.save(this.user).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadUsers();
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

    deleteUser(id: number) {
        this.userService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadUsers();
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

}
