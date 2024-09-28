import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet, NgIf, RouterLinkActive],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

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
    toggleUpdateCoverPhotoMenuOpen() {
        this.isUpdateCoverPhotoMenuOpen = !this.isUpdateCoverPhotoMenuOpen;
    }
    toggleEditProfileMenuOpen() {
        this.isEditProfileMenuOpen = !this.isEditProfileMenuOpen;
    }
    toggleShareProfileMenuOpen() {
        this.isShareProfileMenuOpen = !this.isShareProfileMenuOpen;
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
    }

}