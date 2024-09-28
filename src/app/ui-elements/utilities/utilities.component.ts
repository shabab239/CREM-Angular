import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-utilities',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './utilities.component.html',
    styleUrl: './utilities.component.scss'
})
export class UtilitiesComponent {}