import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FpTeamComponent } from '../common/fp-team/fp-team.component';
import { FpCtaComponent } from '../common/fp-cta/fp-cta.component';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [RouterLink, FpTeamComponent, FpCtaComponent],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss'
})
export class TeamComponent {}