import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-recent-customer-ratings',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf],
    templateUrl: './recent-customer-ratings.component.html',
    styleUrl: './recent-customer-ratings.component.scss'
})
export class RecentCustomerRatingsComponent {

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