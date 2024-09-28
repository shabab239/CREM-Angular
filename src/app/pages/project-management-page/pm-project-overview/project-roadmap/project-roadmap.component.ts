import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexGrid,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    plotOptions: ApexPlotOptions;
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    colors: string[];
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
};

@Component({
    selector: 'app-project-roadmap',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './project-roadmap.component.html',
    styleUrl: './project-roadmap.component.scss'
})
export class ProjectRoadmapComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Projects",
                    data: [400, 550, 600, 700, 1000, 1100, 1200]
                }
            ],
            chart: {
                type: "bar",
                height: 320,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#3584FC"
            ],
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [
                    "Project Planning",
                    "Research",
                    "Design",
                    "Front-end",
                    "Development",
                    "Review & QA",
                    "Launch"
                ],
                axisTicks: {
                    show: true,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: true,
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
            }
        };
    }

}