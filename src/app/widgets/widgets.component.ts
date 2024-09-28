import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevenueGrowthComponent } from './revenue-growth/revenue-growth.component';
import { LeadConversionComponent } from './lead-conversion/lead-conversion.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { AnnualProfitComponent } from './annual-profit/annual-profit.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ProjectsRoadmapComponent } from './projects-roadmap/projects-roadmap.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TotalCoursesComponent } from './total-courses/total-courses.component';
import { TotalEnrolledComponent } from './total-enrolled/total-enrolled.component';
import { TotalMentorsComponent } from './total-mentors/total-mentors.component';
import { TicketsResolvedComponent } from './tickets-resolved/tickets-resolved.component';
import { TicketsInProgressComponent } from './tickets-in-progress/tickets-in-progress.component';
import { TicketsDueComponent } from './tickets-due/tickets-due.component';
import { TicketsNewOpenComponent } from './tickets-new-open/tickets-new-open.component';
import { CoursesSalesComponent } from './courses-sales/courses-sales.component';
import { TimeSpentComponent } from './time-spent/time-spent.component';
import { OurTopCoursesComponent } from './our-top-courses/our-top-courses.component';
import { TotalCustomersComponent } from './total-customers/total-customers.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { TopOrdersComponent } from './top-orders/top-orders.component';
import { ProjectAnalysisComponent } from './project-analysis/project-analysis.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { LeadsBySourceComponent } from './leads-by-source/leads-by-source.component';

@Component({
    selector: 'app-widgets',
    standalone: true,
    imports: [RouterLink, RevenueGrowthComponent, LeadConversionComponent, TotalOrdersComponent, AnnualProfitComponent, ProjectsOverviewComponent, ProjectsRoadmapComponent, WelcomeComponent, TotalCoursesComponent, TotalEnrolledComponent, TotalMentorsComponent, TicketsResolvedComponent, TicketsInProgressComponent, TicketsDueComponent, TicketsNewOpenComponent, CoursesSalesComponent, TimeSpentComponent, OurTopCoursesComponent, TotalCustomersComponent, TotalRevenueComponent, TopOrdersComponent, ProjectAnalysisComponent, TeamMembersComponent, LeadsBySourceComponent],
    templateUrl: './widgets.component.html',
    styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {}