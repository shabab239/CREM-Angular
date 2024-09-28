import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-colored-links',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './colored-links.component.html',
    styleUrl: './colored-links.component.scss'
})
export class ColoredLinksComponent {}