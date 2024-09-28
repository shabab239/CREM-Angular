import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-input-group',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './input-group.component.html',
    styleUrl: './input-group.component.scss'
})
export class InputGroupComponent {}