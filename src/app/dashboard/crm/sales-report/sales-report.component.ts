import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexGrid,
    ApexFill,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexStroke,
    ApexLegend,
    ApexMarkers,
    ChartComponent,
    ApexDataLabels,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    grid: ApexGrid;
    fill: ApexFill;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    stroke: ApexStroke;
    legend: ApexLegend;
    markers: ApexMarkers;
    dataLabels: ApexDataLabels;
    series: ApexAxisChartSeries;
};

@Component({
    selector: 'app-sales-report',
    standalone: true,
    imports: [RouterLink, NgIf, NgApexchartsModule],
    templateUrl: './sales-report.component.html',
    styleUrl: './sales-report.component.scss'
})
export class SalesReportComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Online",
                    data: [45, 23, 62, 60, 110, 100, 135]
                },
                {
                    name: "Offline",
                    data: [20, 58, 24, 50, 40, 70, 97]
                }
            ],
            chart: {
                height: 360,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#605DFF", "#FE7A36"
            ],
            stroke: {
                curve: "straight",
                width: 2
            },
            grid: {
                show: true,
                borderColor: "#F6F7F9"
            },
            markers: {
                size: 4,
                strokeWidth: 0,
                shape: ["circle", "square"],
                hover: {
                    size: 5
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
                    color: '#B1BBC8'
                },
                axisBorder: {
                    show: false,
                    color: '#B1BBC8'
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
                tickAmount: 6,
                max: 150,
                min: 0,
                labels: {
                    formatter: (val) => {
                        return '$' + val + 'k'
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
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