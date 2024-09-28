import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FpContactComponent } from '../common/fp-contact/fp-contact.component';
import { FpCtaComponent } from '../common/fp-cta/fp-cta.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [RouterLink, FpContactComponent, FpCtaComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {}