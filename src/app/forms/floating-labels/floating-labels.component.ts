import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-floating-labels',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './floating-labels.component.html',
    styleUrl: './floating-labels.component.scss'
})
export class FloatingLabelsComponent {}