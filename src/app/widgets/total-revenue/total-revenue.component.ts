import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {
    ApexGrid,
    ApexFill,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexStroke,
    ApexLegend,
    ChartComponent,
    ApexDataLabels,
    ApexResponsive,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    responsive: ApexResponsive[];
    plotOptions: ApexPlotOptions;
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    stroke: ApexStroke;
    chart: ApexChart;
    colors: string[];
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    fill: ApexFill;
};

@Component({
    selector: 'app-total-revenue:not(1)',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './total-revenue.component.html',
    styleUrl: './total-revenue.component.scss'
})
export class TotalRevenueComponent {

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
                    name: "Fashion",
                    data: [20, 40, 25, 60, 30, 50]
                },
                    {
                    name: "Others",
                    data: [20, 20, 25, 15, 35, 25]
                }
            ],
            chart: {
                type: "bar",
                height: 100,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "55%"
                }
            },
            colors: [
                "#605DFF", "#C2CDFF"
            ],
            grid: {
                show: true,
                borderColor: "#ffffff"
            },
            stroke: {
                width: 2,
                show: true,
                colors: ["transparent"]
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
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
                show: false,
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
            legend: {
                show: false,
                fontSize: '12px',
                position: 'bottom',
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
            fill: {
                opacity: 1
            }
        };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}