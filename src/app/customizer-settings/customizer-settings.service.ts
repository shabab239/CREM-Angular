import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomizerSettingsService {
    
    constructor() {
        // Dark Mode
        this.isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme')!) || false;
        this.updateDarkBodyClass();

        // Sidebar Dark Mode
        this.isSidebarDarkTheme = JSON.parse(localStorage.getItem('isSidebarDarkTheme')!);

        // Right Sidebar
        this.isRightSidebarTheme = JSON.parse(localStorage.getItem('isRightSidebarTheme')!);

        // Hide Sidebar
        this.isHideSidebarTheme = JSON.parse(localStorage.getItem('isHideSidebarTheme')!);

        // Header Dark
        this.isHeaderDarkTheme = JSON.parse(localStorage.getItem('isHeaderDarkTheme')!);

        // Card Bordered
        this.isCardBorderedTheme = JSON.parse(localStorage.getItem('isCardBorderedTheme')!);

        // Card Without Border Radius
        this.isCardWithoutBorderRadiusTheme = JSON.parse(localStorage.getItem('isCardWithoutBorderRadiusTheme')!);

        // Card With Box Shadow
        this.isCardWithBoxShadowTheme = JSON.parse(localStorage.getItem('isCardWithBoxShadowTheme')!);

        // RTL Mode
        this.isRTLEnabledTheme = JSON.parse(localStorage.getItem('isRTLEnabledTheme')!) || false;
        this.updateRTLBodyClass();
    }

    // Dark Mode
    private isDarkTheme: boolean;
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
        this.updateDarkBodyClass();
    }
    isDark() {
        return this.isDarkTheme;
    }
    private updateDarkBodyClass() {
        if (this.isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Sidebar Dark
    private isSidebarDarkTheme: boolean;
    toggleSidebarTheme() {
        this.isSidebarDarkTheme = !this.isSidebarDarkTheme;
        localStorage.setItem('isSidebarDarkTheme', JSON.stringify(this.isSidebarDarkTheme));
    }
    isSidebarDark() {
        return this.isSidebarDarkTheme;
    }

    // Right Sidebar
    private isRightSidebarTheme: boolean;
    toggleRightSidebarTheme() {
        this.isRightSidebarTheme = !this.isRightSidebarTheme;
        localStorage.setItem('isRightSidebarTheme', JSON.stringify(this.isRightSidebarTheme));
    }
    isRightSidebar() {
        return this.isRightSidebarTheme;
    }

    // Hide Sidebar
    private isHideSidebarTheme: boolean;
    toggleHideSidebarTheme() {
        this.isHideSidebarTheme = !this.isHideSidebarTheme;
        localStorage.setItem('isHideSidebarTheme', JSON.stringify(this.isHideSidebarTheme));
    }
    isHideSidebar() {
        return this.isHideSidebarTheme;
    }

    // Header Dark Mode
    private isHeaderDarkTheme: boolean;
    toggleHeaderTheme() {
        this.isHeaderDarkTheme = !this.isHeaderDarkTheme;
        localStorage.setItem('isHeaderDarkTheme', JSON.stringify(this.isHeaderDarkTheme));
    }
    isHeaderDark() {
        return this.isHeaderDarkTheme;
    }

    // Card Bordered
    private isCardBorderedTheme: boolean;
    toggleCardBorderedTheme() {
        this.isCardBorderedTheme = !this.isCardBorderedTheme;
        localStorage.setItem('isCardBorderedTheme', JSON.stringify(this.isCardBorderedTheme));
    }
    isCardBordered() {
        return this.isCardBorderedTheme;
    }

    // Card Without Border Radius
    private isCardWithoutBorderRadiusTheme: boolean;
    toggleCardWithoutBorderRadiusTheme() {
        this.isCardWithoutBorderRadiusTheme = !this.isCardWithoutBorderRadiusTheme;
        localStorage.setItem('isCardWithoutBorderRadiusTheme', JSON.stringify(this.isCardWithoutBorderRadiusTheme));
    }
    isCardWithoutBorderRadius() {
        return this.isCardWithoutBorderRadiusTheme;
    }

    // Card With Box Shadow
    private isCardWithBoxShadowTheme: boolean;
    toggleCardWithBoxShadowTheme() {
        this.isCardWithBoxShadowTheme = !this.isCardWithBoxShadowTheme;
        localStorage.setItem('isCardWithBoxShadowTheme', JSON.stringify(this.isCardWithBoxShadowTheme));
    }
    isCardWithBoxShadow() {
        return this.isCardWithBoxShadowTheme;
    }

    // RTL Mode
    private isRTLEnabledTheme: boolean;
    toggleRTLEnabledTheme() {
        this.isRTLEnabledTheme = !this.isRTLEnabledTheme;
        localStorage.setItem('isRTLEnabledTheme', JSON.stringify(this.isRTLEnabledTheme));
        this.updateRTLBodyClass();
    }
    isRTLEnabled() {
        return this.isRTLEnabledTheme;
    }
    private updateRTLBodyClass() {
        if (this.isRTLEnabledTheme) {
            document.body.classList.add('rtl-enabled');
        } else {
            document.body.classList.remove('rtl-enabled');
        }
    }

    // isToggled
    private isToggled = new BehaviorSubject<boolean>(false);
    get isToggled$() {
        return this.isToggled.asObservable();
    }
    toggle() {
        this.isToggled.next(!this.isToggled.value);
    }
    
}