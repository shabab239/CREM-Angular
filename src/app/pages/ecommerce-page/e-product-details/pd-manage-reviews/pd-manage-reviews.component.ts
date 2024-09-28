import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pd-manage-reviews',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './pd-manage-reviews.component.html',
    styleUrl: './pd-manage-reviews.component.scss'
})
export class PdManageReviewsComponent {}