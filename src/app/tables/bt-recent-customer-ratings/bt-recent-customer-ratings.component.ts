import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-bt-recent-customer-ratings',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './bt-recent-customer-ratings.component.html',
    styleUrl: './bt-recent-customer-ratings.component.scss'
})
export class BtRecentCustomerRatingsComponent {

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