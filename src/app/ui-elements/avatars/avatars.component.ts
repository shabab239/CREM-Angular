import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-avatars',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './avatars.component.html',
    styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {}