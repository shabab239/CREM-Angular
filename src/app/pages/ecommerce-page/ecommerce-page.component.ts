import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-ecommerce-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './ecommerce-page.component.html',
    styleUrl: './ecommerce-page.component.scss'
})
export class EcommercePageComponent {}