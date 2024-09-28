import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mp-total-orders',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './mp-total-orders.component.html',
    styleUrl: './mp-total-orders.component.scss'
})
export class MpTotalOrdersComponent {}