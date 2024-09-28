import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FpFooterComponent } from './common/fp-footer/fp-footer.component';
import { FpNavbarComponent } from './common/fp-navbar/fp-navbar.component';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-front-pages',
    standalone: true,
    imports: [RouterOutlet, FpNavbarComponent, FpFooterComponent],
    templateUrl: './front-pages.component.html',
    styleUrl: './front-pages.component.scss'
})
export class FrontPagesComponent {

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