import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { ProjectRoadmapComponent } from './project-roadmap/project-roadmap.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TasksOverviewComponent } from './tasks-overview/tasks-overview.component';

@Component({
    selector: 'app-pm-project-overview',
    standalone: true,
    imports: [RouterLink, ProductDevelopmentComponent, ProjectRoadmapComponent, RecentActivityComponent, ProjectOverviewComponent, TeamMembersComponent, ToDoListComponent, TasksOverviewComponent],
    templateUrl: './pm-project-overview.component.html',
    styleUrl: './pm-project-overview.component.scss'
})
export class PmProjectOverviewComponent {}