import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexXAxis,
    ApexFill,
    ChartComponent,
    ApexLegend,
    ApexStroke,
    ApexMarkers,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    legend: ApexLegend;
    fill: ApexFill;
    markers: ApexMarkers;
    xaxis: ApexXAxis;
};

@Component({
    selector: 'app-multiple-radar-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './multiple-radar-chart.component.html',
    styleUrl: './multiple-radar-chart.component.scss'
})
export class MultipleRadarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Series Blue",
                    data: [80, 50, 30, 40, 100, 20]
                },
                {
                    name: "Series Green",
                    data: [20, 30, 40, 80, 20, 80]
                },
                {
                    name: "Series Orange",
                    data: [44, 76, 78, 13, 43, 10]
                }
            ],
            chart: {
                height: 350,
                type: "radar",
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            title: {
                text: "Radar Chart - Multi Series",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
                labels: {
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            legend: {
                show: true,
                position: 'bottom',
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
            }
        };
    }

}