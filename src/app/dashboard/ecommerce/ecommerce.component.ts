import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalCustomersComponent } from './total-customers/total-customers.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { SalesByLocationsComponent } from './sales-by-locations/sales-by-locations.component';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { ReturningCustomerRateComponent } from './returning-customer-rate/returning-customer-rate.component';

@Component({
    selector: 'app-ecommerce',
    standalone: true,
    imports: [WelcomeComponent, TotalOrdersComponent, TotalSalesComponent, TotalCustomersComponent, TotalRevenueComponent, SalesByLocationsComponent, TopSellingProductsComponent, RecentOrdersComponent, OrderSummaryComponent, RecentTransactionsComponent, ReturningCustomerRateComponent],
    templateUrl: './ecommerce.component.html',
    styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {}