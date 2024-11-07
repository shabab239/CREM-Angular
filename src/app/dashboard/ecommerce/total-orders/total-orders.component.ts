import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexAxisChartSeries,
    NgApexchartsModule,
    ApexPlotOptions,
    ChartComponent,
    ApexDataLabels,
    ApexTooltip,
    ApexLegend,
    ApexStroke,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexGrid
} from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    plotOptions: ApexPlotOptions;
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    chart: ApexChart;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    colors: string[];
    grid: ApexGrid;
};

@Component({
    selector: 'app-total-orders',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent {

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
                    name: "Completed",
                    data: [80, 55, 60, 55, 80]
                },
                {
                    name: "Pending",
                    data: [50, 85, 60, 70, 60]
                }
            ],
            chart: {
                type: "bar",
                height: 99,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#1F64F1", "#C2CDFF"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "85%"
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                show: true,
                colors: ["transparent"]
            },
            grid: {
                show: true,
                borderColor: "#ffffff"
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May"
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
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
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
                }
            }
        };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}
