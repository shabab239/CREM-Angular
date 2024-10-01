import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent {}