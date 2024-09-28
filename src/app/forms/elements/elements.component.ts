import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

@Component({
    selector: 'app-elements',
    standalone: true,
    imports: [RouterLink, BasicComponent, AdvancedComponent],
    templateUrl: './elements.component.html',
    styleUrl: './elements.component.scss'
})
export class ElementsComponent {}