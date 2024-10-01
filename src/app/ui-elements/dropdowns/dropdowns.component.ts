import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dropdowns',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './dropdowns.component.html',
    styleUrl: './dropdowns.component.scss'
})
export class DropdownsComponent {

    // Dropdown
    isDropdownOpen = false;
    isDropdownOpen2 = false;
    isCardHeaderOpen = false;
    isCardHeaderOpen2 = false;
    toggleDropdownBtn() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    toggleDropdownBtn2() {
        this.isDropdownOpen2 = !this.isDropdownOpen2;
    }
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    toggleCardHeaderMenu2() {
        this.isCardHeaderOpen2 = !this.isCardHeaderOpen2;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown1')) {
            this.isDropdownOpen = false;
        }
        if (!target.closest('.dropdown2')) {
            this.isDropdownOpen2 = false;
        }
        if (!target.closest('.trezo-card-header-menu1')) {
            this.isCardHeaderOpen = false;
        }
        if (!target.closest('.trezo-card-header-menu2')) {
            this.isCardHeaderOpen2 = false;
        }
    }

}