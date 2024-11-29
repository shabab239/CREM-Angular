import { Component } from '@angular/core';
import { FpBannerComponent } from '../common/fp-banner/fp-banner.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FpBannerComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
