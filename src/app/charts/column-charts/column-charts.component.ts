import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicColumnChartComponent } from './basic-column-chart/basic-column-chart.component';
import { DataLabelsColumnChartComponent } from './data-labels-column-chart/data-labels-column-chart.component';
import { StackedColumnChartComponent } from './stacked-column-chart/stacked-column-chart.component';
import { RangeColumnChartComponent } from './range-column-chart/range-column-chart.component';
import { RotatedLabelsColumnChartComponent } from './rotated-labels-column-chart/rotated-labels-column-chart.component';
import { DistributedColumnChartComponent } from './distributed-column-chart/distributed-column-chart.component';

@Component({
    selector: 'app-column-charts',
    standalone: true,
    imports: [RouterLink, BasicColumnChartComponent, DataLabelsColumnChartComponent, StackedColumnChartComponent, RangeColumnChartComponent, RotatedLabelsColumnChartComponent, DistributedColumnChartComponent],
    templateUrl: './column-charts.component.html',
    styleUrl: './column-charts.component.scss'
})
export class ColumnChartsComponent {}