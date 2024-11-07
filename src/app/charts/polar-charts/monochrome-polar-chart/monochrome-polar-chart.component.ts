import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    fill: ApexFill,
    yaxis: ApexYAxis,
    stroke: ApexStroke,
    legend: ApexLegend,
    plotOptions: ApexPlotOptions
};

@Component({
    selector: 'app-monochrome-polar-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './monochrome-polar-chart.component.html',
    styleUrl: './monochrome-polar-chart.component.scss'
})
export class MonochromePolarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                42, 39, 35, 29, 26
            ],
            chart: {
                height: 500,
                type: 'polarArea'
            },
            labels: [
                'Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'
            ],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                }
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            theme: {
                monochrome: {
                    // enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        };
    }

}
