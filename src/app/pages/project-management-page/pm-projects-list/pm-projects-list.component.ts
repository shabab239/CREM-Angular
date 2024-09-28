import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-pm-projects-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './pm-projects-list.component.html',
    styleUrl: './pm-projects-list.component.scss'
})
export class PmProjectsListComponent {}