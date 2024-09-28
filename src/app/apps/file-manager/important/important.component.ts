import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-important',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './important.component.html',
    styleUrl: './important.component.scss'
})
export class ImportantComponent {}