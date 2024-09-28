import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexPlotOptions,
    ApexYAxis,
    ApexGrid,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-basic-timeline-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './basic-timeline-chart.component.html',
    styleUrl: './basic-timeline-chart.component.scss'
})
export class BasicTimelineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: "Code",
                            y: [
                                new Date("2019-03-02").getTime(),
                                new Date("2019-03-04").getTime()
                            ]
                        },
                        {
                            x: "Test",
                            y: [
                                new Date("2019-03-04").getTime(),
                                new Date("2019-03-08").getTime()
                            ]
                        },
                        {
                            x: "Validation",
                            y: [
                                new Date("2019-03-08").getTime(),
                                new Date("2019-03-12").getTime()
                            ]
                        },
                        {
                            x: "Deployment",
                            y: [
                                new Date("2019-03-12").getTime(),
                                new Date("2019-03-18").getTime()
                            ]
                        }
                    ]
                }
            ],
            chart: {
                height: 375,
                type: "rangeBar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis: {
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
            },
            yaxis: {
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
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            colors: [
                "#605DFF"
            ]
        };
    }

}