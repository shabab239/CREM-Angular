import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { API_URLS } from '../../util/urls';
import {MarketplaceService} from "../service/marketplace.service";
import {Unit, UnitType, UnitTypeOptions} from "../../construction/project/unit/unit.model";

@Component({
    selector: 'app-browse-units',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        CurrencyPipe
    ],
    templateUrl: './browse-units.component.html',
    styleUrl: './browse-units.component.scss'
})
export class BrowseUnitsComponent implements OnInit {
    API_URLS = API_URLS;
    buildingId: number;
    building: any;
    units: Unit[] = [];
    selectedUnitType: string = '';
    unitTypeOptions = UnitTypeOptions;
    loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private marketplaceService: MarketplaceService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.buildingId = params['buildingId'];
            this.loadBuildingWithUnits();
        });
    }

    loadBuildingWithUnits() {
        this.loading = true;
        this.marketplaceService.getBuildingWithAvailableUnits(this.buildingId)
            .subscribe({
                next: (response) => {
                    if (response.successful) {
                        this.building = response.data.building;
                        this.units = response.data.availableUnits;
                    }
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error loading units:', error);
                    this.loading = false;
                }
            });
    }

    filterByUnitType() {
        if (!this.selectedUnitType) {
            this.loadBuildingWithUnits();
            return;
        }

        this.loading = true;
        this.marketplaceService.searchAvailableUnits({
            type: this.selectedUnitType as UnitType,
            buildingId: this.buildingId
        }, 0, 10).subscribe({
            next: (response) => {
                if (response.successful) {
                    this.units = response.data.units;
                }
                this.loading = false;
            },
            error: (error) => {
                console.error('Error filtering units:', error);
                this.loading = false;
            }
        });
    }
}
