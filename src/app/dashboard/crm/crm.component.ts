import { Component } from '@angular/core';
import { RevenueGrowthComponent } from './revenue-growth/revenue-growth.component';
import { LeadConversionComponent } from './lead-conversion/lead-conversion.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { AnnualProfitComponent } from './annual-profit/annual-profit.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { LeadsBySourceComponent } from './leads-by-source/leads-by-source.component';
import { TopPerformersComponent } from './top-performers/top-performers.component';
import { RecentLeadsComponent } from './recent-leads/recent-leads.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { TopProductsBySalesComponent } from './top-products-by-sales/top-products-by-sales.component';

@Component({
    selector: 'app-crm',
    standalone: true,
    imports: [RevenueGrowthComponent, LeadConversionComponent, TotalOrdersComponent, AnnualProfitComponent, BalanceOverviewComponent, LeadsBySourceComponent, TopPerformersComponent, RecentLeadsComponent, SalesReportComponent, TopProductsBySalesComponent],
    templateUrl: './crm.component.html',
    styleUrl: './crm.component.scss'
})
export class CrmComponent {}