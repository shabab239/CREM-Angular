import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicPolarChartComponent } from './basic-polar-chart/basic-polar-chart.component';
import { MonochromePolarChartComponent } from './monochrome-polar-chart/monochrome-polar-chart.component';

@Component({
    selector: 'app-polar-charts',
    standalone: true,
    imports: [RouterLink, BasicPolarChartComponent, MonochromePolarChartComponent],
    templateUrl: './polar-charts.component.html',
    styleUrl: './polar-charts.component.scss'
})
export class PolarChartsComponent {}