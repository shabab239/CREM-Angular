import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevenueGrowthComponent } from '../../../dashboard/crm/revenue-growth/revenue-growth.component';
import { LeadConversionComponent } from '../../../dashboard/crm/lead-conversion/lead-conversion.component';
import { TotalOrdersComponent } from '../../../dashboard/crm/total-orders/total-orders.component';
import { AnnualProfitComponent } from '../../../dashboard/crm/annual-profit/annual-profit.component';
import { NgClass, NgIf } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-c-leads',
    standalone: true,
    imports: [RouterLink, RevenueGrowthComponent, LeadConversionComponent, TotalOrdersComponent, AnnualProfitComponent, NgClass, NgIf, FileUploadModule],
    templateUrl: './c-leads.component.html',
    styleUrl: './c-leads.component.scss'
})
export class CLeadsComponent {

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Edit Popup Trigger
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}