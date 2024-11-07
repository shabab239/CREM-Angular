import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexFill,
    ApexGrid,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexStroke,
    ApexLegend,
    ApexDataLabels,
    ChartComponent,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    fill: ApexFill;
    grid: ApexGrid;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    labels: string[];
    stroke: ApexStroke;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
    series: ApexAxisChartSeries;
    subtitle: ApexTitleSubtitle;
};

@Component({
    selector: 'app-tickets-due',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './tickets-due.component.html',
    styleUrl: './tickets-due.component.scss'
})
export class TicketsDueComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tickets Due",
                    data: [35, 70, 40, 65, 45, 70, 65]
                }
            ],
            chart: {
                type: "area",
                height: 130,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight",
                width: 2
            },
            colors: [
                "#AD63F6"
            ],
            fill: {
                type: 'gradient',
                gradient: {
                    stops: [0, 90, 100],
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.9
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
                    show: false,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 5,
                show: false,
                max: 100,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: true,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: false,
                borderColor: "#ECEEF2"
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
                }
            }
        };
    }

}
