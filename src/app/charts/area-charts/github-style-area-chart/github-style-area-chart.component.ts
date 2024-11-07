import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexDataLabels,
    ApexFill,
    ApexYAxis,
    ApexXAxis,
    ApexStroke,
    ApexGrid,
    ApexLegend,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";

import { githubData } from "./github-data";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    legend: ApexLegend;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    stroke: ApexStroke;
    colors: any;
};

@Component({
    selector: 'app-github-style-area-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './github-style-area-chart.component.html',
    styleUrl: './github-style-area-chart.component.scss'
})
export class GithubStyleAreaChartComponent {

    public chartMonths: Partial<ChartOptions>;
    public chartYears: Partial<ChartOptions>;
    public commonOptions: Partial<ChartOptions> = {
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: "solid"
        },
        xaxis: {
            type: "datetime",
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
        stroke: {
            width: 0,
            curve: "smooth"
        },
        grid: {
            show: true,
            borderColor: "#ECEEF2"
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
        }
    };

    constructor() {
        this.initCharts();
    }

    public initCharts(): void {
        this.chartMonths = {
            series: [
                {
                    name: "commits",
                    data: githubData.series
                }
            ],
            chart: {
                id: "chartyear",
                type: "area",
                height: 160,
                toolbar: {
                    show: false,
                    autoSelected: "pan"
                }
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                show: false,
                tickAmount: 3,
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
        this.chartYears = {
            series: [
                {
                    name: "commits",
                    data: githubData.series
                }
            ],
            chart: {
                height: 200,
                type: "area",
                toolbar: {
                    autoSelected: "selection"
                },
                brush: {
                    enabled: true,
                    target: "chartyear"
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date("26 Jan 2014").getTime(),
                        max: new Date("29 Mar 2015").getTime()
                    }
                }
            },
            colors: [
                "#7bd39a"
            ],
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
                }
            }
        };
    }

}
