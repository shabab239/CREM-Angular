import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-working-schedule',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgFor, NgIf, NgClass],
    templateUrl: './working-schedule.component.html',
    styleUrl: './working-schedule.component.scss'
})
export class WorkingScheduleComponent {

	// Owl Carousel
    upcomingEventsSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

	// isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Calendar
    currentMonth: number;
    currentYear: number;
    currentDay: number; // Current day
    today: { year: number; month: number; day: number }; // Today's date
    weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    monthNames: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    daysInMonth: (number | null)[] = []; // Allow null values
    ngOnInit() {
        const today = new Date();
        this.currentMonth = today.getMonth(); // 0-based index
        this.currentYear = today.getFullYear();
        this.currentDay = today.getDate(); // Get current day of the month
        this.today = {
            year: this.currentYear,
            month: this.currentMonth,
            day: this.currentDay
        };
        this.generateCalendar();
    }
    generateCalendar() {
        this.daysInMonth = [];
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const numberOfDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        for (let i = 0; i < firstDay; i++) {
            this.daysInMonth.push(null); // Placeholder for days before the first of the month
        }
        for (let i = 1; i <= numberOfDays; i++) {
            this.daysInMonth.push(i);
        }
    }
    previousMonth() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.generateCalendar();
    }
    nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.generateCalendar();
    }
    isToday(day: number | null): boolean {
        if (day === null) return false;
        return (
            this.today.year === this.currentYear &&
            this.today.month === this.currentMonth &&
            this.today.day === day
        );
    }

}