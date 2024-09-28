import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-range',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './range.component.html',
    styleUrl: './range.component.scss'
})
export class RangeComponent {}