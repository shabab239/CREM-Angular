import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {Lead} from "../model/lead.model";
import {LeadService} from "../service/lead.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-pm-leads-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
    leads: Lead[] = [];
    errors: { [key: string]: string } = {};

    constructor(private leadService: LeadService) {}

    ngOnInit(): void {
        this.loadLeads();
    }

    loadLeads(): void {
        this.leadService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.leads = response.data['leads'];
                } else {
                    this.errors = response?.errors || {};
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    deleteLead(id: number): void {
        this.leadService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadLeads();
                    AlertUtil.success(response);
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }
}
