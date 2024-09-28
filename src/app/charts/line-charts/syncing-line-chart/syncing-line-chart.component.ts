import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexXAxis,
    ApexTooltip,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: any; //ApexChart;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    grid: any; //ApexGrid;
    colors: any;
    toolbar: any;
};

@Component({
    selector: 'app-syncing-line-chart',
    standalone: true,
    imports: [RouterLink, NgApexchartsModule],
    templateUrl: './syncing-line-chart.component.html',
    styleUrl: './syncing-line-chart.component.scss'
})
export class SyncingLineChartComponent {

    public chart1options: Partial<ChartOptions>;
    public chart2options: Partial<ChartOptions>;
    public chart3options: Partial<ChartOptions>;
    public commonOptions: Partial<ChartOptions> = {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "straight"
        },
        toolbar: {
            tools: {
                selection: false
            }
        },
        markers: {
            size: 6,
            hover: {
                size: 10
            }
        },
        tooltip: {
            followCursor: false,
            x: {
                show: false
            },
            marker: {
                show: false
            },
            y: {
                title: {
                    formatter: function() {
                        return "";
                    }
                }
            }
        },
        grid: {
            show: true,
            clipMarkers: false,
            borderColor: "#ECEEF2"
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
        }
    };

    constructor() {
        this.initCharts();
    }

    public initCharts(): void {
        this.chart1options = {
            series: [
                {
                    name: "chart1",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                }
            ],
            chart: {
                id: "fb",
                group: "social",
                type: "line",
                height: 160
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                tickAmount: 2,
                labels: {
                    show: true,
                    minWidth: 40,
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
            xaxis: {
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
            }
        };

        this.chart2options = {
            series: [
                {
                    name: "chart2",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        20,
                        {
                            min: 10,
                            max: 30
                        }
                    )
                }
            ],
            chart: {
                id: "tw",
                group: "social",
                type: "line",
                height: 160
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                tickAmount: 2,
                labels: {
                    show: true,
                    minWidth: 40,
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
            xaxis: {
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
            }
        };

        this.chart3options = {
            series: [
                {
                    name: "chart3",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                }
            ],
            chart: {
                id: "yt",
                group: "social",
                type: "area",
                height: 160
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                tickAmount: 2,
                labels: {
                    show: true,
                    minWidth: 40,
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
            xaxis: {
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
            }
        };
    }

    public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any): any[] {
        let i = 0;
        let series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

}