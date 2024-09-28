import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-list-group',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './list-group.component.html',
    styleUrl: './list-group.component.scss'
})
export class ListGroupComponent {}