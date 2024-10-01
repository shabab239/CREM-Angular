import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-images',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './images.component.html',
    styleUrl: './images.component.scss'
})
export class ImagesComponent {}