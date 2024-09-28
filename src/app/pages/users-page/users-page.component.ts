import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-users-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './users-page.component.html',
    styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {}