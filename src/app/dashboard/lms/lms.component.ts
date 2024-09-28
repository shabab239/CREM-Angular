import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { OurTopCoursesComponent } from './our-top-courses/our-top-courses.component';
import { TotalEnrolledComponent } from './total-enrolled/total-enrolled.component';
import { TotalMentorsComponent } from './total-mentors/total-mentors.component';
import { StudentsInterestedTopicsComponent } from './students-interested-topics/students-interested-topics.component';
import { TopInstructorsComponent } from './top-instructors/top-instructors.component';
import { StudentsProgressComponent } from './students-progress/students-progress.component';
import { GroupLessonsComponent } from './group-lessons/group-lessons.component';
import { EnrolledByCountriesComponent } from './enrolled-by-countries/enrolled-by-countries.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesSalesComponent } from './courses-sales/courses-sales.component';
import { TimeSpentComponent } from './time-spent/time-spent.component';
import { TotalCoursesComponent } from './total-courses/total-courses.component';

@Component({
    selector: 'app-lms',
    standalone: true,
    imports: [WelcomeComponent, TotalCoursesComponent, TotalEnrolledComponent, TotalMentorsComponent, StudentsInterestedTopicsComponent, TopInstructorsComponent, StudentsProgressComponent, GroupLessonsComponent, EnrolledByCountriesComponent, CoursesComponent, CoursesSalesComponent, TimeSpentComponent, OurTopCoursesComponent],
    templateUrl: './lms.component.html',
    styleUrl: './lms.component.scss'
})
export class LmsComponent {}