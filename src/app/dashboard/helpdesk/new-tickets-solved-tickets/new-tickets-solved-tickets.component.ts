import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexFill,
    ApexGrid,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexStroke,
    ApexLegend,
    ApexTooltip,
    ApexDataLabels,
    ChartComponent,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    subtitle: ApexTitleSubtitle;
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    labels: string[];
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    grid: ApexGrid;
    fill: ApexFill;
};

@Component({
    selector: 'app-new-tickets-solved-tickets',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './new-tickets-solved-tickets.component.html',
    styleUrl: './new-tickets-solved-tickets.component.scss'
})
export class NewTicketsSolvedTicketsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "New Tickets",
                    data: [25, 70, 25, 45, 60, 55, 70]
                },
                {
                    name: "Solved Tickets",
                    data: [65, 45, 65, 30, 75, 24, 50]
                }
            ],
            chart: {
                type: "area",
                height: 475,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF", "#FD5812"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 2
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            fill: {
                type: 'gradient',
                gradient: {
                    stops: [0, 90, 100],
                    shadeIntensity: 1,
                    opacityFrom: 0,
                    opacityTo: 0.6
                }
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
                tickAmount: 4,
                max: 80,
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
                horizontalAlign: 'center',
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
                    offsetY: -.5,
                    radius: 2
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