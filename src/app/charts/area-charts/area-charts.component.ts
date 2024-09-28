import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { SplineAreaChartComponent } from './spline-area-chart/spline-area-chart.component';
import { DatetimeAreaChartComponent } from './datetime-area-chart/datetime-area-chart.component';
import { NegativeValuesAreaChartComponent } from './negative-values-area-chart/negative-values-area-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { MissingNullValuesAreaChartComponent } from './missing-null-values-area-chart/missing-null-values-area-chart.component';
import { GithubStyleAreaChartComponent } from './github-style-area-chart/github-style-area-chart.component';

@Component({
    selector: 'app-area-charts',
    standalone: true,
    imports: [RouterLink, BasicAreaChartComponent, SplineAreaChartComponent, DatetimeAreaChartComponent, NegativeValuesAreaChartComponent, StackedAreaChartComponent, MissingNullValuesAreaChartComponent, GithubStyleAreaChartComponent],
    templateUrl: './area-charts.component.html',
    styleUrl: './area-charts.component.scss'
})
export class AreaChartsComponent {}