import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-recent-activity',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './mp-recent-activity.component.html',
    styleUrl: './mp-recent-activity.component.scss'
})
export class MpRecentActivityComponent {

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