import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexPlotOptions,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    grid: ApexGrid;
    colors: any;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-range-column-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './range-column-chart.component.html',
    styleUrl: './range-column-chart.component.scss'
})
export class RangeColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Blue",
                    data: [
                        {
                            x: "Team A",
                            y: [1, 5]
                        },
                        {
                            x: "Team B",
                            y: [4, 6]
                        },
                        {
                            x: "Team C",
                            y: [5, 8]
                        },
                        {
                            x: "Team D",
                            y: [3, 11]
                        }
                    ]
                },
                {
                    name: "Green",
                    data: [
                        {
                            x: "Team A",
                            y: [2, 6]
                        },
                        {
                            x: "Team B",
                            y: [1, 3]
                        },
                        {
                            x: "Team C",
                            y: [7, 8]
                        },
                        {
                            x: "Team D",
                            y: [5, 9]
                        }
                    ]
                }
            ],
            chart: {
                type: "rangeBar",
                height: 370,
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#605DFF", "#FD5812"
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -.5
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            xaxis: {
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
            yaxis: {
                tickAmount: 5,
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
            }
        };
    }

}