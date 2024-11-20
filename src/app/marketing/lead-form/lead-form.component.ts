import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import {Lead, LeadStatus} from "../model/lead.model";
import {Campaign} from "../model/campaign.model";
import {LeadService} from "../service/lead.service";
import {CampaignService} from "../service/campaign.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-lead-form',
    standalone: true,
    imports: [NgForOf, FormsModule, NgIf, NgClass],
    templateUrl: './lead-form.component.html',
    styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {
    errors: { [key: string]: string } = {};
    lead: Lead = new Lead();
    campaigns: Campaign[] = [];
    leadStatuses = Object.values(LeadStatus);

    constructor(
        private leadService: LeadService,
        private campaignService: CampaignService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadCampaigns();

        let leadId = this.route.snapshot.params['id'];
        if (leadId) {
            this.leadService.getById(leadId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.lead = response.data['lead'];
                    } else {
                        this.errors = response?.errors || {};
                        AlertUtil.error(response);
                    }
                },
                error: (error) => {
                    AlertUtil.error(error);
                }
            });
        }
    }

    loadCampaigns(): void {
        this.campaignService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.campaigns = response.data['campaigns'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    save(): void {
        let apiResponse: Observable<ApiResponse> = this.lead.id
            ? this.leadService.update(this.lead)
            : this.leadService.save(this.lead);

        apiResponse.subscribe({
            next: (response) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/leads']);
                } else {
                    this.errors = response?.errors || {};
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }
}
