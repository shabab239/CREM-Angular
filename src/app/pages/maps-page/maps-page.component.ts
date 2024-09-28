import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-maps-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './maps-page.component.html',
    styleUrl: './maps-page.component.scss'
})
export class MapsPageComponent {}