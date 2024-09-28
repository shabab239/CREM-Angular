import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtTopSellingProductsComponent } from './bt-top-selling-products/bt-top-selling-products.component';
import { BtRecentOrdersComponent } from './bt-recent-orders/bt-recent-orders.component';
import { BtTopPerformersComponent } from './bt-top-performers/bt-top-performers.component';
import { BtRecentLeadsComponent } from './bt-recent-leads/bt-recent-leads.component';
import { BtAllProjectsComponent } from './bt-all-projects/bt-all-projects.component';
import { BtMyTasksComponent } from './bt-my-tasks/bt-my-tasks.component';
import { BtStudentsProgressComponent } from './bt-students-progress/bt-students-progress.component';
import { BtGroupLessonsComponent } from './bt-group-lessons/bt-group-lessons.component';
import { BtPerformanceOfAgentsComponent } from './bt-performance-of-agents/bt-performance-of-agents.component';
import { BtRecentCustomerRatingsComponent } from './bt-recent-customer-ratings/bt-recent-customer-ratings.component';
import { BtToDoListComponent } from './bt-to-do-list/bt-to-do-list.component';

@Component({
    selector: 'app-tables',
    standalone: true,
    imports: [RouterLink, BtTopSellingProductsComponent, BtRecentOrdersComponent, BtTopPerformersComponent, BtRecentLeadsComponent, BtAllProjectsComponent, BtMyTasksComponent, BtStudentsProgressComponent, BtGroupLessonsComponent, BtPerformanceOfAgentsComponent, BtRecentCustomerRatingsComponent, BtToDoListComponent],
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.scss'
})
export class TablesComponent {}