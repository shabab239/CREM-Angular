import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexXAxis,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

import { dataSeries } from "./data-series";

@Component({
    selector: 'app-zoomable-line-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './zoomable-line-chart.component.html',
    styleUrl: './zoomable-line-chart.component.scss'
})
export class ZoomableLineChartComponent {

    public series: ApexAxisChartSeries;
    public chart: ApexChart;
    public dataLabels: ApexDataLabels;
    public markers: ApexMarkers;
    public title: ApexTitleSubtitle;
    public fill: ApexFill;
    public yaxis: ApexYAxis;
    public grid: ApexGrid;
    public xaxis: ApexXAxis;
    public tooltip: ApexTooltip;

    constructor() {
        this.initChartData();
    }

    public initChartData(): void {
        let ts2 = 1484418600000;
        let dates = [];
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;
            dates.push([ts2, dataSeries[1][i].value]);
        }
        this.series = [
            {
                name: "XYZ MOTORS",
                data: dates
            }
        ];
        this.chart = {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                show: true,
                autoSelected: "zoom"
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.markers = {
            size: 0
        };
        this.grid = {
            show: true,
            borderColor: "#ECEEF2"
        },
        this.title = {
            text: "Stock Price Movement",
            align: "left",
            offsetX: -9,
            style: {
                fontWeight: '500',
                fontSize: '14px',
                color: '#64748B'
            }
        };
        this.fill = {
            type: "gradient",
            gradient: {
                inverseColors: false,
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                // stops: [0, 90, 100]
            }
        };
        this.yaxis = {
            tickAmount: 5,
            labels: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                },
                show: true,
                style: {
                    colors: "#64748B",
                    fontSize: "12px"
                }
            },
            title: {
                text: "Price",
                style: {
                    color: "#3A4252",
                    fontSize: "14px",
                    fontWeight: 500
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
        };
        this.xaxis = {
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
        };
        this.tooltip = {
            shared: false,
            y: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                }
            }
        };
    }

}