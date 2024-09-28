import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-stacks',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './stacks.component.html',
    styleUrl: './stacks.component.scss'
})
export class StacksComponent {}