import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-icons',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss'
})
export class IconsComponent {}