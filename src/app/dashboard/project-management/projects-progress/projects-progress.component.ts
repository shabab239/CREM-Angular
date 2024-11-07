import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexGrid,
    ApexFill,
    ApexChart,
    ApexXAxis,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexMarkers,
    ApexDataLabels,
    ChartComponent,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    legend: ApexLegend;
    stroke: ApexStroke;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    chart: ApexChart;
    colors: string[];
    grid: ApexGrid;
    fill: ApexFill;
};

@Component({
    selector: 'app-projects-progress',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './projects-progress.component.html',
    styleUrl: './projects-progress.component.scss'
})
export class ProjectsProgressComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Completed",
                    data: [70, 23, 45, 30, 62, 70]
                },
                {
                    name: "In Progress",
                    data: [15, 40, 37, 38, 80, 45]
                },
                {
                    name: "Not Start Yet",
                    data: [50, 11, 60, 15, 31, 30]
                },
                {
                    name: "Cancelled",
                    data: [30, 60, 25, 22, 50, 15]
                }
            ],
            chart: {
                height: 323,
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
                "#605DFF", "#FE7A36", "#AD63F6", "#D71C00"
            ],
            stroke: {
                curve: "smooth",
                width: 2
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            markers: {
                size: 4,
                strokeWidth: 0,
                shape: ["circle", "square", "circle", "square"],
                hover: {
                    size: 5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
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
                    formatter: (val) => {
                        return val + '%'
                    },
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
