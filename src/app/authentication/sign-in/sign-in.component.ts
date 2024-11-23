import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Token} from "../model/token.model";
import {AuthService} from "../auth.service";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, NgClass, FormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    isToggled = false;
    password: string = '';
    isPasswordVisible: boolean = false;
    isLoading: boolean = false;

    token: Token = new Token();
    errorMessage: string = '';

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }
    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    onPasswordInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password = inputElement.value;
    }

    signIn() {
        this.isLoading = true; // Start loading
        this.authService.login(this.token).subscribe({
            next: loggedIn => {
                this.isLoading = false;
                if (loggedIn) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.errorMessage = 'Invalid username or password';
                }
            },
            error: error => {
                this.isLoading = false;
                AlertUtil.error(error);
            }
        });
    }
}
