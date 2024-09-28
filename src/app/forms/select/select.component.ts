import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss'
})
export class SelectComponent {}