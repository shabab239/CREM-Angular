import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {CampaignService} from "../service/campaign.service";
import {Campaign} from "../model/campaign.model";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-pm-campaigns-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
    campaigns: Campaign[] = [];
    errors: { [key: string]: string } = {};

    constructor(private campaignService: CampaignService) {}

    ngOnInit(): void {
        this.loadCampaigns();
    }

    loadCampaigns(): void {
        this.campaignService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.campaigns = response.data['campaigns'];
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

    deleteCampaign(id: number): void {
        this.campaignService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadCampaigns();
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
