import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-helpdesk-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './helpdesk-page.component.html',
    styleUrl: './helpdesk-page.component.scss'
})
export class HelpdeskPageComponent {}