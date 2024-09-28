import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-e-reviews',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './e-reviews.component.html',
    styleUrl: './e-reviews.component.scss'
})
export class EReviewsComponent {

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