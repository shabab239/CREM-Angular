import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-coming-soon',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

    private countdownInterval: any;
    public countdown: { days: number, hours: number, minutes: number, seconds: number };

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        // Set your target date and time for the countdown
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        // Update the countdown every second
        this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
            // Countdown has ended, do something here
            this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(this.countdownInterval);
        }
        }, 1000);
    }

    ngOnDestroy(): void {
        // Clear the interval to prevent memory leaks
        clearInterval(this.countdownInterval);
    }

	// isToggled
    isToggled = false;

}