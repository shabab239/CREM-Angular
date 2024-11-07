import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexChart,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexNonAxisChartSeries
} from "ng-apexcharts";
import { NgIf } from '@angular/common';

export type ChartOptions = {
    labels: any;
    chart: ApexChart;
    colors: string[];
    stroke: ApexStroke;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    series: ApexNonAxisChartSeries;
};

@Component({
    selector: 'app-customer-satisfaction',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule, NgIf],
    templateUrl: './customer-satisfaction.component.html',
    styleUrl: './customer-satisfaction.component.scss'
})
export class CustomerSatisfactionComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [50, 15, 75, 50],
            chart: {
                height: 175,
                type: "donut"
            },
            labels: [
                "Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"
            ],
            colors: [
                "#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"
            ],
            stroke: {
                width: 1,
                show: true,
                colors: ["transparent"]
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
                }
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        size: '73%',
                        labels: {
                            show: false,
                            name: {
                                color: '#64748B'
                            },
                            value: {
                                show: true,
                                color: '#3A4252',
                                fontSize: '28px',
                                fontWeight: '600'
                            },
                            total: {
                                show: true,
                                color: '#64748B'
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}
