import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-draft',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './draft.component.html',
    styleUrl: './draft.component.scss'
})
export class DraftComponent {}