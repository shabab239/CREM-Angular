import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-social-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './social-page.component.html',
    styleUrl: './social-page.component.scss'
})
export class SocialPageComponent {}