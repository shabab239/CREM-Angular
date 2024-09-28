import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexFill,
    ApexGrid,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ChartComponent,
    ApexDataLabels,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";
import { NgIf } from '@angular/common';

export type ChartOptions = {
    fill: ApexFill;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    colors: string[];
    labels: string[];
    chart: ApexChart;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
    subtitle: ApexTitleSubtitle;
    series: ApexAxisChartSeries;
};

@Component({
    selector: 'app-balance-overview',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './balance-overview.component.html',
    styleUrl: './balance-overview.component.scss'
})
export class BalanceOverviewComponent {

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
                    name: "Revenue",
                    data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80 ]
                },
                {
                    name: "Expenses",
                    data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120 ]
                }
            ],
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#AD63F6", "#605DFF"
            ],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            stroke: {
                curve: "straight",
                width: 2
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
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
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -.5,
                    radius: 2
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