import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MpWelcomeComponent } from './mp-welcome/mp-welcome.component';
import { MpTotalProjectsComponent } from './mp-total-projects/mp-total-projects.component';
import { MpTotalOrdersComponent } from './mp-total-orders/mp-total-orders.component';
import { MpTotalRevenueComponent } from './mp-total-revenue/mp-total-revenue.component';
import { MpProfileIntroComponent } from './mp-profile-intro/mp-profile-intro.component';
import { MpProfileInformationComponent } from './mp-profile-information/mp-profile-information.component';
import { MpAdditionalInformationComponent } from './mp-additional-information/mp-additional-information.component';
import { MpRecentActivityComponent } from './mp-recent-activity/mp-recent-activity.component';
import { MpToDoListComponent } from './mp-to-do-list/mp-to-do-list.component';
import { MpOverviewComponent } from './mp-overview/mp-overview.component';

@Component({
    selector: 'app-my-profile',
    standalone: true,
    imports: [RouterLink, MpWelcomeComponent, MpTotalProjectsComponent, MpTotalOrdersComponent, MpTotalRevenueComponent, MpProfileIntroComponent, MpProfileInformationComponent, MpAdditionalInformationComponent, MpRecentActivityComponent, MpToDoListComponent, MpOverviewComponent],
    templateUrl: './my-profile.component.html',
    styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {}