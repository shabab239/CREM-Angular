import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicRadialbarChartComponent } from './basic-radialbar-chart/basic-radialbar-chart.component';
import { MultipleRadialbarChartComponent } from './multiple-radialbar-chart/multiple-radialbar-chart.component';
import { CustomAngleCircleRadialbarChartComponent } from './custom-angle-circle-radialbar-chart/custom-angle-circle-radialbar-chart.component';
import { GradientRadialbarChartComponent } from './gradient-radialbar-chart/gradient-radialbar-chart.component';
import { StrockedCircularGaugeRadialbarChartComponent } from './strocked-circular-gauge-radialbar-chart/strocked-circular-gauge-radialbar-chart.component';
import { SemiCircularGaugeRadialbarChartComponent } from './semi-circular-gauge-radialbar-chart/semi-circular-gauge-radialbar-chart.component';

@Component({
    selector: 'app-radialbar-charts',
    standalone: true,
    imports: [RouterLink, BasicRadialbarChartComponent, MultipleRadialbarChartComponent, CustomAngleCircleRadialbarChartComponent, GradientRadialbarChartComponent, StrockedCircularGaugeRadialbarChartComponent, SemiCircularGaugeRadialbarChartComponent],
    templateUrl: './radialbar-charts.component.html',
    styleUrl: './radialbar-charts.component.scss'
})
export class RadialbarChartsComponent {}