import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexGrid,
    ApexFill,
    ApexXAxis,
    ApexYAxis,
    ApexChart,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    plotOptions: ApexPlotOptions;
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    chart: ApexChart;
    yaxis: ApexYAxis;
    colors: string[];
    xaxis: ApexXAxis;
    grid: ApexGrid;
    fill: ApexFill;
};

@Component({
    selector: 'app-revenue',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss'
})
export class RevenueComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Orders",
                    data: [28, 50, 90, 95, 20, 70, 35]
                },
                {
                    name: "Earnings",
                    data: [80, 60, 70, 30, 45, 20, 80]
                },
                {
                    name: "Refunds",
                    data: [32, 23, 78, 35, 65, 35, 15]
                },
                {
                    name: "Conversion Rate",
                    data: [60, 25, 80, 25, 15, 40, 15]
                }
            ],
            chart: {
                type: "bar",
                height: 435,
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#605DFF", "#3584FC", "#AD63F6", "#FD5812"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "50%"
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
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
            yaxis: {
                tickAmount: 5,
                max: 100,
                min: 0,
                labels: {
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

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}
