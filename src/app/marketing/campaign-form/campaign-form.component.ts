import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import {Campaign, CampaignStatus, CampaignType} from "../model/campaign.model";
import {CampaignService} from "../service/campaign.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-campaign-form',
    standalone: true,
    imports: [NgForOf, FormsModule, NgIf, NgClass],
    templateUrl: './campaign-form.component.html',
    styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
    errors: { [key: string]: string } = {};
    campaign: Campaign = new Campaign();

    campaignTypes = Object.values(CampaignType);
    campaignStatuses = Object.values(CampaignStatus);

    constructor(
        private campaignService: CampaignService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        let campaignId = this.route.snapshot.params['id'];
        if (campaignId) {
            this.campaignService.getById(campaignId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.campaign = response.data['campaign'];
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

    save(): void {
        let apiResponse: Observable<ApiResponse> = this.campaign.id
            ? this.campaignService.update(this.campaign)
            : this.campaignService.save(this.campaign);

        apiResponse.subscribe({
            next: (response) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/marketing/campaigns']);
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
