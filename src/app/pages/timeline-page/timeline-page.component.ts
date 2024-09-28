import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

@Component({
    selector: 'app-timeline-page',
    standalone: true,
    imports: [RouterLink, BasicComponent, AdvancedComponent],
    templateUrl: './timeline-page.component.html',
    styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent {}