import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgIf, RouterOutlet],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {

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
    isUpdateCoverPhotoMenuOpen = false;
    isEditProfileMenuOpen = false;
    isShareProfileMenuOpen = false;
    isCardHeaderOpen = false;
    isCardHeaderOpen2 = false;
    isCardHeaderOpen3 = false;
    toggleUpdateCoverPhotoMenuOpen() {
        this.isUpdateCoverPhotoMenuOpen = !this.isUpdateCoverPhotoMenuOpen;
    }
    toggleEditProfileMenuOpen() {
        this.isEditProfileMenuOpen = !this.isEditProfileMenuOpen;
    }
    toggleShareProfileMenuOpen() {
        this.isShareProfileMenuOpen = !this.isShareProfileMenuOpen;
    }
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
        if (!target.closest('.update-cover-photo-menu')) {
            this.isUpdateCoverPhotoMenuOpen = false;
        }
        if (!target.closest('.edit-profile-menu')) {
            this.isEditProfileMenuOpen = false;
        }
        if (!target.closest('.share-profile-menu')) {
            this.isShareProfileMenuOpen = false;
        }
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