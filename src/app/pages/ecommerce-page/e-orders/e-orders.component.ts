import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-e-orders',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './e-orders.component.html',
    styleUrl: './e-orders.component.scss'
})
export class EOrdersComponent {}