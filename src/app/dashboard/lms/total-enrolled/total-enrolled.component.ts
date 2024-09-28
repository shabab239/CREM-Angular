import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-enrolled',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './total-enrolled.component.html',
    styleUrl: './total-enrolled.component.scss'
})
export class TotalEnrolledComponent {}