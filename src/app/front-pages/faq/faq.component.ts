import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FpFaqComponent } from '../common/fp-faq/fp-faq.component';
import { FpCtaComponent } from '../common/fp-cta/fp-cta.component';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [RouterLink, FpFaqComponent, FpCtaComponent],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {}