import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [RouterLink, FullCalendarModule, WorkingScheduleComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

    // Calendar
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true, // when too many events in a day, show the popover
        weekends: true,
        events: [
            {
                title: 'Annual Conference 2024',
                date: '2024-06-01'
            },
            {
                title: 'Product Lunch Webinar 2024 & Meet With Trezo Angular',
                start: '2024-06-02',
                end: '2024-06-04'
            },
            {
                title: 'Tech Summit 2024',
                date: '2024-06-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-06-17'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-06-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2024-06-30'
            },
            {
                title: 'Annual Conference 2024',
                date: '2024-07-10'
            },
            {
                title: 'Product Lunch Webinar 2024 & Meet With Trezo Angular',
                start: '2024-07-14',
                end: '2024-07-16'
            },
            {
                title: 'Tech Summit 2024',
                date: '2024-07-24'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-07-26'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-07-28'
            },
            {
                title: 'Annual Conference 2024',
                date: '2024-08-21'
            },
            {
                title: 'Product Lunch Webinar 2024 & Meet With Trezo Angular',
                start: '2024-08-05',
                end: '2024-08-08'
            },
            {
                title: 'Tech Summit 2024',
                date: '2024-08-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-08-17'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-08-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2024-08-30'
            },
            {
                title: 'Annual Conference 2024',
                date: '2024-09-05'
            },
            {
                title: 'Product Lunch Webinar 2024 & Meet With Trezo Angular',
                start: '2024-09-09',
                end: '2024-09-11'
            },
            {
                title: 'Tech Summit 2024',
                date: '2024-09-20'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-09-26'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-09-29'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-10-20'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-11-20'
            },
            {
                title: 'Web Development Seminar',
                date: '2024-12-20'
            }
        ],
        plugins: [dayGridPlugin]
    };

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}