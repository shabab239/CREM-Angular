import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../dashboard.service';
import { ApiResponse } from '../../util/api.response.model';
import {ChartComponent} from "ng-apexcharts";

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule, ChartComponent],
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    projectCount = 0;
    buildingCount = 0;
    unitCount = 0;
    bookingCount = 0;
    revenue = 0;
    expenses = 0;
    leadCount = 0;

    availableUnits = 0;
    totalLeads = 0;
    activeLeads = 0;
    convertedLeads = 0;
    recentBookings: any[] = [];

    workerUtilization: any = {};
    attendanceStats: any[] = [];
    productivityMetrics: any = {};

    overviewStats = [
        { title: 'Projects', value: 0, iconClass: 'bi-building text-primary', borderClass: 'border-primary border-start border-4' },
        { title: 'Buildings', value: 0, iconClass: 'bi-houses text-success', borderClass: 'border-success border-start border-4' },
        { title: 'Units', value: 0, iconClass: 'bi-house-door text-info', borderClass: 'border-info border-start border-4' },
        { title: 'Bookings', value: 0, iconClass: 'bi-calendar-check text-warning', borderClass: 'border-warning border-start border-4' }
    ];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.loadAllDashboardData();
    }

    loadAllDashboardData() { //will merge the requests later
        this.dashboardService.getAdminDashboard().subscribe({
            next: (response: ApiResponse) => {
                if (response.successful && response.data) {
                    this.updateAdminStats(response.data);
                }
            }
        });

        this.dashboardService.getSalesDashboard().subscribe({
            next: (response: ApiResponse) => {
                if (response.successful && response.data) {
                    this.updateSalesStats(response.data);
                }
            }
        });

        this.dashboardService.getWorkforceAnalytics(0, 10).subscribe({
            next: (response: ApiResponse) => {
                if (response.successful && response.data) {
                    this.updateWorkforceStats(response.data);
                }
            }
        });
    }

    private updateAdminStats(data: any) {
        this.projectCount = data.projectCount;
        this.buildingCount = data.buildingCount;
        this.unitCount = data.unitCount;
        this.bookingCount = data.bookingCount;
        this.revenue = data.revenue;
        this.expenses = data.expenses;
        this.leadCount = data.leadCount;

        this.overviewStats[0].value = this.projectCount;
        this.overviewStats[1].value = this.buildingCount;
        this.overviewStats[2].value = this.unitCount;
        this.overviewStats[3].value = this.bookingCount;
    }

    private updateSalesStats(data: any) {
        this.availableUnits = data.availableUnits;
        this.totalLeads = data.totalLeads;
        this.activeLeads = data.activeLeads;
        this.convertedLeads = data.convertedLeads;
        this.recentBookings = data.recentBookings;
    }

    private updateWorkforceStats(data: any) {
        this.workerUtilization = data.workerUtilization;
        this.attendanceStats = data.attendanceStats;
        this.productivityMetrics = data.productivityMetrics;
    }
}
