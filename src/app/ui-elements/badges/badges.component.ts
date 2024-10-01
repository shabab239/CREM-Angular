import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-badges',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './badges.component.html',
    styleUrl: './badges.component.scss'
})
export class BadgesComponent {}