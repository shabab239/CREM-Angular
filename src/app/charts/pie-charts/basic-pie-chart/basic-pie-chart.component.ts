import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    ApexChart,
    ApexLegend,
    ApexDataLabels,
    ChartComponent,
    NgApexchartsModule,
    ApexNonAxisChartSeries,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    chart: ApexChart;
    colors: string[];
    labels: any;
};

@Component({
    selector: 'app-basic-pie-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './basic-pie-chart.component.html',
    styleUrl: './basic-pie-chart.component.scss'
})
export class BasicPieChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [60, 30, 10],
            chart: {
                height: 360,
                type: "pie"
            },
            labels: [
                "Completed", "New Order", "Pending"
            ],
            colors: [
                "#37D80A", "#605DFF", "#AD63F6"
            ],
            legend: {
                show: true,
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
            },
            dataLabels: {
                enabled: false
            }
        };
    }

}
