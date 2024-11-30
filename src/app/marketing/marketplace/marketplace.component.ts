import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MarketplaceService} from "../service/marketplace.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {API_URLS} from "../../util/urls";
import {UnitTypeOptions} from "../../construction/unit/unit.model";
import {BuildingTypeOptions} from "../../construction/building/building.model";

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf
    ],
    styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
    buildings: any[] = [];
    loading: boolean = false;
    selectedBuildingType: string = '';
    selectedUnitType: string = '';
    API_URLS = API_URLS;
    buildingTypeOptions = BuildingTypeOptions;
    unitTypeOptions = UnitTypeOptions;

    constructor(
        private marketplaceService: MarketplaceService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadBuildings();
    }

    loadBuildings() {
        this.loading = true;
        this.marketplaceService.getAllAvailableBuildings()
            .subscribe({
                next: (response) => {
                    if (response.successful) {
                        this.buildings = response.data.buildings;
                    }
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error loading buildings:', error);
                    this.loading = false;
                }
            });
    }

    filterByBuildingType() {
        if (!this.selectedBuildingType) {
            this.loadBuildings();
            return;
        }

        this.loading = true;
        this.marketplaceService.getBuildingsByBuildingType(this.selectedBuildingType)
            .subscribe({
                next: (response) => {
                    if (response.successful) {
                        this.buildings = response.data.buildings;
                    }
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error filtering buildings:', error);
                    this.loading = false;
                }
            });
    }

    filterByUnitType() {
        if (!this.selectedUnitType) {
            this.loadBuildings();
            return;
        }

        this.loading = true;
        this.marketplaceService.getBuildingsByUnitType(this.selectedUnitType)
            .subscribe({
                next: (response) => {
                    if (response.successful) {
                        this.buildings = response.data.buildings;
                    }
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error filtering buildings:', error);
                    this.loading = false;
                }
            });
    }

    viewBuildingDetails(buildingId: number) {
        this.router.navigate(['/marketplace/browse-units/', buildingId]);
    }

}
