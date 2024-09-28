import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/authentication/']);
    }

}
