import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {
    ApexGrid,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexDataLabels,
    ChartComponent,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    legend: ApexLegend;
    chart: ApexChart;
    xaxis: ApexXAxis;
    colors: string[];
    yaxis: ApexYAxis;
    grid: ApexGrid;
};

@Component({
    selector: 'app-total-customers:not(1)',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './total-customers.component.html',
    styleUrl: './total-customers.component.scss'
})
export class TotalCustomersComponent {

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
                    name: "Orders",
                    data: [55, 50, 60, 45, 85, 80, 100]
                },
                {
                    name: "Sales",
                    data: [45, 38, 80, 65, 55, 75, 90]
                }
            ],
            chart: {
                height: 140,
                type: "line",
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
            colors: [
                "#605DFF", "#C2CDFF"
            ],
            stroke: {
                width: 2,
                curve: "straight"
            },
            grid: {
                show: true,
                borderColor: "#ffffff"
            },
            xaxis: {
                categories: [
                    "01 Jun",
                    "02 Jun",
                    "03 Jun",
                    "04 Jun",
                    "05 Jun",
                    "06 Jun",
                    "07 Jun"
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
                }
            }
        };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}
