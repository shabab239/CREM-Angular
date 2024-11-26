import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-browse-units',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './browse-units.component.html',
  styleUrl: './browse-units.component.scss'
})
export class BrowseUnitsComponent {

}
