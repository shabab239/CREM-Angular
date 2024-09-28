import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-published:not(2)',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './published.component.html',
    styleUrl: './published.component.scss'
})
export class PublishedComponent {}