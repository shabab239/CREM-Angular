import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { TablesOfContentComponent } from './tables-of-content/tables-of-content.component';
import { CourseInstructorComponent } from './course-instructor/course-instructor.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';

@Component({
    selector: 'app-l-course-details',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, TablesOfContentComponent, CourseInstructorComponent, EnrolledStudentsComponent, ReviewsComponent],
    templateUrl: './l-course-details.component.html',
    styleUrl: './l-course-details.component.scss'
})
export class LCourseDetailsComponent {}