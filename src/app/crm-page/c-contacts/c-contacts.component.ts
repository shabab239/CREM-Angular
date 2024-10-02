import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-c-contacts',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, FileUploadModule],
    templateUrl: './c-contacts.component.html',
    styleUrl: './c-contacts.component.scss'
})
export class CContactsComponent {

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