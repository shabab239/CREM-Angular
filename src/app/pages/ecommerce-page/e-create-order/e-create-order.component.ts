import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-e-create-order',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './e-create-order.component.html',
    styleUrl: './e-create-order.component.scss'
})
export class ECreateOrderComponent {}