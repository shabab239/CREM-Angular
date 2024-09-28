import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';

@Component({
    selector: 'app-e-cart',
    standalone: true,
    imports: [RouterLink, QuantityCounterComponent],
    templateUrl: './e-cart.component.html',
    styleUrl: './e-cart.component.scss'
})
export class ECartComponent {}