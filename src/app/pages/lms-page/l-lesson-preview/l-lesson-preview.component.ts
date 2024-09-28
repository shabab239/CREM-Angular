import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-l-lesson-preview',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './l-lesson-preview.component.html',
    styleUrl: './l-lesson-preview.component.scss'
})
export class LLessonPreviewComponent {}