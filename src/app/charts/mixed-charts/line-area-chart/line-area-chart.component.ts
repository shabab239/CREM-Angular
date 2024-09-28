import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ApexTooltip,
    ApexMarkers,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    grid: ApexGrid;
    yaxis: ApexYAxis | ApexYAxis[];
    labels: string[];
    stroke: ApexStroke;
    markers: ApexMarkers;
    colors: any;
    fill: ApexFill;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-line-area-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './line-area-chart.component.html',
    styleUrl: './line-area-chart.component.scss'
})
export class LineAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Team A",
                    type: "area",
                    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47]
                },
                {
                    name: "Team B",
                    type: "line",
                    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                curve: "smooth"
            },
            colors: [
                "#AD63F6", "#FF4023"
            ],
            fill: {
                type: "solid",
                opacity: [0.35, 1]
            },
            labels: [
                "Dec 01",
                "Dec 02",
                "Dec 03",
                "Dec 04",
                "Dec 05",
                "Dec 06",
                "Dec 07",
                "Dec 08",
                "Dec 09 ",
                "Dec 10"
            ],
            markers: {
                size: 0
            },
            yaxis: [
                {
                    title: {
                        text: "Series A",
                        style: {
                            color: "#3A4252",
                            fontSize: "14px",
                            fontWeight: 500
                        }
                    },
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
                },
                {
                    opposite: true,
                    title: {
                        text: "Series B",
                        style: {
                            color: "#3A4252",
                            fontSize: "14px",
                            fontWeight: 500
                        }
                    },
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
            ],
            xaxis: {
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
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function(y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;
                    }
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
                    offsetY: -.5
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
    }

    public generateData(count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = "w" + (i + 1).toString();
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

}