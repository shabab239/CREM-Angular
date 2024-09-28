import { Component } from '@angular/core';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { TicketsStatusComponent } from './tickets-status/tickets-status.component';
import { TicketsResolvedComponent } from './tickets-resolved/tickets-resolved.component';
import { TicketsDueComponent } from './tickets-due/tickets-due.component';
import { TicketsNewOpenComponent } from './tickets-new-open/tickets-new-open.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { PerformanceOfAgentsComponent } from './performance-of-agents/performance-of-agents.component';
import { NewTicketsSolvedTicketsComponent } from './new-tickets-solved-tickets/new-tickets-solved-tickets.component';
import { RecentCustomerRatingsComponent } from './recent-customer-ratings/recent-customer-ratings.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SupportOverviewComponent } from './support-overview/support-overview.component';
import { TicketsInProgressComponent } from './tickets-in-progress/tickets-in-progress.component';

@Component({
    selector: 'app-helpdesk',
    standalone: true,
    imports: [CongratulationsComponent, TicketsStatusComponent, TicketsResolvedComponent, TicketsInProgressComponent, TicketsDueComponent, TicketsNewOpenComponent, CustomerSatisfactionComponent, ResponseTimeComponent, PerformanceOfAgentsComponent, NewTicketsSolvedTicketsComponent, RecentCustomerRatingsComponent, ToDoListComponent, SupportOverviewComponent],
    templateUrl: './helpdesk.component.html',
    styleUrl: './helpdesk.component.scss'
})
export class HelpdeskComponent {}