import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexChart,
    ApexAxisChartSeries,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexXAxis,
    ApexLegend,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
};

@Component({
    selector: 'app-distributed-column-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './distributed-column-chart.component.html',
    styleUrl: './distributed-column-chart.component.scss'
})
export class DistributedColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "distibuted",
                    data: [21, 22, 10, 28, 16, 21, 13, 30]
                }
            ],
            chart: {
                height: 370,
                type: "bar",
                events: {
                    click: function(chart, w, e) {
                        // console.log(chart, w, e)
                    }
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF",
                "#796df6",
                "#00cae3",
                "#ffb264",
                "#2ed47e",
                "#e74c3c",
                "#26a69a",
                "#d10ce8"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
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
            },
            xaxis: {
                categories: [
                    ["John", "Doe"],
                    ["Joe", "Smith"],
                    ["Jake", "Williams"],
                    "Amber",
                    ["Peter", "Brown"],
                    ["Mary", "Evans"],
                    ["David", "Wilson"],
                    ["Lily", "Roberts"]
                ],
                labels: {
                    show: true,
                    style: {
                        colors: [
                            "#605DFF",
                            "#796df6",
                            "#00cae3",
                            "#ffb264",
                            "#2ed47e",
                            "#e74c3c",
                            "#26a69a",
                            "#d10ce8"
                        ],
                        fontSize: "12px"
                    }
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
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
            }
        };
    }

}