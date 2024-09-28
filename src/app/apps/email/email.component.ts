import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-email',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './email.component.html',
    styleUrl: './email.component.scss'
})
export class EmailComponent {}