import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-c-deals',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, FileUploadModule],
    templateUrl: './c-deals.component.html',
    styleUrl: './c-deals.component.scss'
})
export class CDealsComponent {

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Edit Popup Trigger
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}