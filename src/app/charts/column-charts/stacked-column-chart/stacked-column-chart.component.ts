import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexGrid,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    colors: any;
    legend: ApexLegend;
    yaxis: ApexYAxis;
    fill: ApexFill;
};

@Component({
    selector: 'app-stacked-column-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './stacked-column-chart.component.html',
    styleUrl: './stacked-column-chart.component.scss'
})
export class StackedColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Product A",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "Product B",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "Product C",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "Product D",
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            colors: [
                "#605DFF", "#00cae3", "#ffb264", "#e74c3c"
            ],
            xaxis: {
                type: "category",
                categories: [
                    "01/2024",
                    "02/2024",
                    "03/2024",
                    "04/2024",
                    "05/2024",
                    "06/2024"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            legend: {
                position: "right",
                fontSize: '12px',
                offsetY: 40,
                labels: {
                    colors: '#64748B'
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 5
                },
                markers: {
                }
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
    }

}
