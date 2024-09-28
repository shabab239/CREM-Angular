import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-controls',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './form-controls.component.html',
    styleUrl: './form-controls.component.scss'
})
export class FormControlsComponent {}