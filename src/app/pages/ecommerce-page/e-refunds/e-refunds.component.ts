import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-e-refunds',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './e-refunds.component.html',
    styleUrl: './e-refunds.component.scss'
})
export class ERefundsComponent {

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}