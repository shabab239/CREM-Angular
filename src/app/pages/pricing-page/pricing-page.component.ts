import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Style1Component } from './style-1/style-1.component';
import { Style2Component } from './style-2/style-2.component';
import { Style3Component } from './style-3/style-3.component';

@Component({
    selector: 'app-pricing-page',
    standalone: true,
    imports: [RouterLink, Style1Component, Style2Component, Style3Component],
    templateUrl: './pricing-page.component.html',
    styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent {}