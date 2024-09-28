import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexChart,
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexYAxis,
    ApexXAxis,
    ApexGrid,
    ApexTooltip,
    ApexMarkers,
    ApexAnnotations,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

import { data } from "./series-data";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    annotations: ApexAnnotations;
    colors: any;
    toolbar: any;
};

@Component({
    selector: 'app-datetime-area-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './datetime-area-chart.component.html',
    styleUrl: './datetime-area-chart.component.scss'
})
export class DatetimeAreaChartComponent {

    @ViewChild("chart", { static: false }) chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    public activeOptionButton = "all";
    public updateOptionsData:any = {
        "1m": {
            xaxis: {
                min: new Date("28 Jan 2013").getTime(),
                max: new Date("27 Feb 2013").getTime()
            }
        },
        "6m": {
            xaxis: {
                min: new Date("27 Sep 2012").getTime(),
                max: new Date("27 Feb 2013").getTime()
            }
        },
        "1y": {
            xaxis: {
                min: new Date("27 Feb 2012").getTime(),
                max: new Date("27 Feb 2013").getTime()
            }
        },
        "1yd": {
            xaxis: {
                min: new Date("01 Jan 2013").getTime(),
                max: new Date("27 Feb 2013").getTime()
            }
        },
        all: {
            xaxis: {
                min: undefined,
                max: undefined
            }
        }
    };

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.initChart();
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    initChart(): void {
        this.chartOptions = {
            series: [
                {
                    name: "Trezo",
                    data: data
                }
            ],
            chart: {
                type: "area",
                height: 350
            },
            annotations: {
                yaxis: [
                    {
                        y: 30,
                        borderColor: "#999",
                        label: {
                            text: "Support",
                            style: {
                                color: "#ffffff",
                                background: "#00E396"
                            }
                        }
                    }
                ],
                xaxis: [
                    {
                        x: new Date("14 Nov 2012").getTime(),
                        borderColor: "#999",
                        label: {
                            text: "Rally",
                            style: {
                                color: "#ffffff",
                                background: "#775DD0"
                            }
                        }
                    }
                ]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                min: new Date("01 Mar 2012").getTime(),
                tickAmount: 6,
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
            colors: [
                "#605DFF"
            ],
            tooltip: {
                x: {
                    format: "dd MMM yyyy"
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    // stops: [0, 100]
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

    public updateOptions(option:any): void {
        this.activeOptionButton = option;
        this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
    }

    // isToggled
    isToggled = false;

}