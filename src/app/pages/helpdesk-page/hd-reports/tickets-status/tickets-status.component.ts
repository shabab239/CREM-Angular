import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
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
import { NgIf } from '@angular/common';

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
    selector: 'app-tickets-status',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './tickets-status.component.html',
    styleUrl: './tickets-status.component.scss'
})
export class TicketsStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Solved",
                    data: [28, 50, 90, 95, 20, 70, 35]
                },
                {
                    name: "In Progress",
                    data: [80, 60, 70, 30, 45, 20, 80]
                },
                {
                    name: "Pending",
                    data: [32, 23, 78, 35, 65, 35, 15]
                },
                {
                    name: "Others",
                    data: [60, 25, 80, 25, 15, 40, 15]
                }
            ],
            chart: {
                type: "bar",
                height: 392,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF", "#3584FC", "#AD63F6", "#FD5812"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "65%"
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
                width: 3,
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
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " Tickets";
                    }
                }
            },
            legend: {
                show: false,
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
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
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
