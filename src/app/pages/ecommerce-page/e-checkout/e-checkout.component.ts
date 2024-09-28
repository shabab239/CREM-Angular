import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-e-checkout',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './e-checkout.component.html',
    styleUrl: './e-checkout.component.scss'
})
export class ECheckoutComponent {}