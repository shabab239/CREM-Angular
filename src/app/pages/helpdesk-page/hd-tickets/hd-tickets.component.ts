import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketsResolvedComponent } from '../../../dashboard/helpdesk/tickets-resolved/tickets-resolved.component';
import { TicketsInProgressComponent } from '../../../dashboard/helpdesk/tickets-in-progress/tickets-in-progress.component';
import { TicketsDueComponent } from '../../../dashboard/helpdesk/tickets-due/tickets-due.component';
import { TicketsNewOpenComponent } from '../../../dashboard/helpdesk/tickets-new-open/tickets-new-open.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-hd-tickets',
    standalone: true,
    imports: [RouterLink, TicketsResolvedComponent, TicketsInProgressComponent, TicketsDueComponent, TicketsNewOpenComponent, NgIf],
    templateUrl: './hd-tickets.component.html',
    styleUrl: './hd-tickets.component.scss'
})
export class HdTicketsComponent {

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}