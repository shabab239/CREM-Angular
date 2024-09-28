import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-l-instructors',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf, NgClass, FileUploadModule],
    templateUrl: './l-instructors.component.html',
    styleUrl: './l-instructors.component.scss'
})
export class LInstructorsComponent {

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}