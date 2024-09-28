import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-order-tracking',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './e-order-tracking.component.html',
    styleUrl: './e-order-tracking.component.scss'
})
export class EOrderTrackingComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}