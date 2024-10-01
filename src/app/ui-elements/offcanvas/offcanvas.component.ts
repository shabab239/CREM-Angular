import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-offcanvas',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './offcanvas.component.html',
    styleUrl: './offcanvas.component.scss'
})
export class OffcanvasComponent {
    
    // Modal Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}