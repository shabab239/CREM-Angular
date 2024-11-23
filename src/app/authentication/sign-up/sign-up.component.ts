import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { AlertUtil } from '../../util/alert.util';
import {Role, User} from '../model/user.model';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [FormsModule, NgIf, NgClass, RouterLink],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    user: User = new User();
    errors: { [key: string]: string } = {};
    isLoading: boolean = false;
    isPasswordVisible: boolean = false;
    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    ngOnInit(): void {
    }

    constructor(private authService: AuthService, private router: Router) {}

    signUp(): void {
        this.user.role = Role.CUSTOMER;
        const token = {
            "username": this.user.username,
            "password": this.user.password
        }
        this.user.token = token;
        this.isLoading = true;
        this.authService.register(this.user).subscribe({
            next: (response: ApiResponse) => {
                this.isLoading = false;
                if (response && response.successful) {
                    this.router.navigate(['/authentication/']);
                } else {
                    this.errors = response?.errors || {};
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                this.isLoading = false;
                AlertUtil.error(error);
            }
        });
    }
}
