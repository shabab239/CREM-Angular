import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-internal-error',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './internal-error.component.html',
    styleUrl: './internal-error.component.scss'
})
export class InternalErrorComponent {}