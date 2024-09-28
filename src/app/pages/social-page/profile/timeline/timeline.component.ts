import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dropdown Menu
    isCardHeaderOpen = false;
    isCardHeaderOpen2 = false;
    isCardHeaderOpen3 = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    toggleCardHeaderMenu2() {
        this.isCardHeaderOpen2 = !this.isCardHeaderOpen2;
    }
    toggleCardHeaderMenu3() {
        this.isCardHeaderOpen3 = !this.isCardHeaderOpen3;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
        if (!target.closest('.trezo-card-header-menu2')) {
            this.isCardHeaderOpen2 = false;
        }
        if (!target.closest('.trezo-card-header-menu3')) {
            this.isCardHeaderOpen3 = false;
        }
    }
    
}