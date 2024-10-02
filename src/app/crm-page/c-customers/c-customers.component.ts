import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-c-customers',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, FileUploadModule],
    templateUrl: './c-customers.component.html',
    styleUrl: './c-customers.component.scss'
})
export class CCustomersComponent {

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