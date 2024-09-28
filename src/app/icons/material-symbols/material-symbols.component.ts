import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-material-symbols',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './material-symbols.component.html',
    styleUrl: './material-symbols.component.scss'
})
export class MaterialSymbolsComponent {

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