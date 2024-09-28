import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-profile-intro',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './mp-profile-intro.component.html',
    styleUrl: './mp-profile-intro.component.scss'
})
export class MpProfileIntroComponent {

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