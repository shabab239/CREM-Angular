import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-toasts',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './toasts.component.html',
    styleUrl: './toasts.component.scss'
})
export class ToastsComponent {

    // Toasts
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}