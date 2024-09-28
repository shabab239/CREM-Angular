import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from './toggle.service';
import { NgClass, NgIf } from '@angular/common';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService
    ) {
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Burger Menu Toggle
    toggle() {
        this.toggleService.toggle();
    }

    // Settings Button Toggle
    settingsButtonToggle() {
        this.themeService.toggle();
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Header Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Dropdown Menu
    isConnectedAppsDropdownOpen = false;
    isLanguageDropdownOpen = false;
    isNotificationsDropdownOpen = false;
    isProfileDropdownOpen = false;
    toggleConnectedAppsDropdown() {
        this.isConnectedAppsDropdownOpen = !this.isConnectedAppsDropdownOpen;
    }
    toggleLanguageDropdown() {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    }
    toggleNotificationsDropdown() {
        this.isNotificationsDropdownOpen = !this.isNotificationsDropdownOpen;
    }
    toggleProfileDropdown() {
        this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.connected-apps-menu')) {
            this.isConnectedAppsDropdownOpen = false;
        }
        if (!target.closest('.language-menu')) {
            this.isLanguageDropdownOpen = false;
        }
        if (!target.closest('.notifications-menu')) {
            this.isNotificationsDropdownOpen = false;
        }
        if (!target.closest('.profile-menu')) {
            this.isProfileDropdownOpen = false;
        }
    }

    // Fullscreen
    isFullscreen: boolean = false;
    ngOnInit() {
        // Listen for fullscreen change events to update the button text
        document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
    }
    toggleFullscreen() {
        if (!this.isFullscreen) {
            this.openFullscreen();
        } else {
            this.closeFullscreen();
        }
    }
    openFullscreen() {
        const element = document.documentElement as HTMLElement & {
            mozRequestFullScreen?: () => Promise<void>;
            webkitRequestFullscreen?: () => Promise<void>;
            msRequestFullscreen?: () => Promise<void>;
        };
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }
    closeFullscreen() {
        const doc = document as Document & {
            mozCancelFullScreen?: () => Promise<void>;
            webkitExitFullscreen?: () => Promise<void>;
            msExitFullscreen?: () => Promise<void>;
        };
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (doc.mozCancelFullScreen) { // Firefox
            doc.mozCancelFullScreen();
        } else if (doc.webkitExitFullscreen) { // Chrome, Safari, and Opera
            doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) { // IE/Edge
            doc.msExitFullscreen();
        }
    }
    onFullscreenChange() {
        const doc = document as Document & {
            webkitFullscreenElement?: Element;
            mozFullScreenElement?: Element;
            msFullscreenElement?: Element;
        };
        this.isFullscreen = !!(document.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement);
    }

}