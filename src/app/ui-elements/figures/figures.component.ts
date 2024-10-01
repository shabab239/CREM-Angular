import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-figures',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './figures.component.html',
    styleUrl: './figures.component.scss'
})
export class FiguresComponent {}