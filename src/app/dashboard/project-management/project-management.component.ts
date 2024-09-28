import { Component } from '@angular/core';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ProjectsRoadmapComponent } from './projects-roadmap/projects-roadmap.component';
import { ProjectsProgressComponent } from './projects-progress/projects-progress.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectAnalysisComponent } from './project-analysis/project-analysis.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TasksOverviewComponent } from './tasks-overview/tasks-overview.component';

@Component({
    selector: 'app-project-management',
    standalone: true,
    imports: [ProjectsOverviewComponent, ProjectsRoadmapComponent, ProjectsProgressComponent, MyTasksComponent, AllProjectsComponent, ProjectAnalysisComponent, TeamMembersComponent, WorkingScheduleComponent, ToDoListComponent, TasksOverviewComponent],
    templateUrl: './project-management.component.html',
    styleUrl: './project-management.component.scss'
})
export class ProjectManagementComponent {}