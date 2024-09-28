import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-members-page',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './members-page.component.html',
    styleUrl: './members-page.component.scss'
})
export class MembersPageComponent {}