import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexChart,
    ApexLegend,
    ApexDataLabels,
    ApexTheme,
    ChartComponent,
    NgApexchartsModule,
    ApexNonAxisChartSeries,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    theme: ApexTheme;
    chart: ApexChart;
    colors: string[];
    labels: any;
};

@Component({
    selector: 'app-pie-monochrome-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './pie-monochrome-chart.component.html',
    styleUrl: './pie-monochrome-chart.component.scss'
})
export class PieMonochromeChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                type: "pie"
            },
            labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            legend: {
                show: true,
                offsetY: 0,
                fontSize: '12px',
                labels: {
                    colors: '#64748B'
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 5
                },
                markers: {
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -.5
                }
            },
            dataLabels: {
                enabled: false
            }
        };
    }

}