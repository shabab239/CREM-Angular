import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-crm-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './marketing.component.html',
    styleUrl: './marketing.component.scss'
})
export class MarketingComponent {}
