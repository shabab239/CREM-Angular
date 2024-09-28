import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: any;
};

@Component({
    selector: 'app-basic-radar-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './basic-radar-chart.component.html',
    styleUrl: './basic-radar-chart.component.scss'
})
export class BasicRadarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Trezo",
                    data: [80, 50, 30, 40, 100, 20]
                }
            ],
            chart: {
                height: 350,
                type: "radar",
                toolbar: {
                    show: true
                }
            },
            title: {
                text: "Basic Radar Chart",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"]
            },
            colors: ["#605DFF"],
            yaxis: {
                show: true,
                tickAmount: 4
            }
        };
    }

}