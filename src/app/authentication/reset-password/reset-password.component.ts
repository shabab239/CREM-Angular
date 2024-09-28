import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Password Show/Hide
    password1: string = '';
    password2: string = '';
    password3: string = '';
    isPassword1Visible: boolean = false;
    isPassword2Visible: boolean = false;
    isPassword3Visible: boolean = false;
    togglePassword1Visibility(): void {
        this.isPassword1Visible = !this.isPassword1Visible;
    }
    togglePassword2Visibility(): void {
        this.isPassword2Visible = !this.isPassword2Visible;
    }
    togglePassword3Visibility(): void {
        this.isPassword3Visible = !this.isPassword3Visible;
    }
    onPassword1Input(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password1 = inputElement.value;
    }
    onPassword2Input(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password2 = inputElement.value;
    }
    onPassword3Input(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password3 = inputElement.value;
    }

}