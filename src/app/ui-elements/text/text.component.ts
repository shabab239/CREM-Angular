import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-text',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './text.component.html',
    styleUrl: './text.component.scss'
})
export class TextComponent {}