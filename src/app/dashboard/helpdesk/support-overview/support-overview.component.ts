import { NgIf } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexChart,
    ApexLegend,
    ApexStroke,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexNonAxisChartSeries,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    stroke: ApexStroke;
    chart: ApexChart;
    colors: string[];
    labels: any;
};

@Component({
    selector: 'app-support-overview',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './support-overview.component.html',
    styleUrl: './support-overview.component.scss'
})
export class SupportOverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                55, 44, 30, 12
            ],
            chart: {
                height: 414,
                type: "pie"
            },
            labels: [
                "Solved", "In Progress", "Pending", "Unassigned"
            ],
            colors: [
                "#37D80A", "#605DFF", "#AD63F6", "#FD5812"
            ],
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    expandOnClick: false
                }
            },
            stroke: {
                width: 1,
                show: true,
                colors: ["#ffffff"]
            },
            legend: {
                show: true,
                fontSize: '12px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 7
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
