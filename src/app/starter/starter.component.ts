import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-starter',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './starter.component.html',
    styleUrl: './starter.component.scss'
})
export class StarterComponent {}