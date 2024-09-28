import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-typography',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './typography.component.html',
    styleUrl: './typography.component.scss'
})
export class TypographyComponent {}