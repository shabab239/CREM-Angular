import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from '@angular/router';
import {API_URLS} from '../../util/urls';
import {MarketplaceService} from "../service/marketplace.service";
import {Unit, UnitType, UnitTypeOptions} from "../../construction/unit/unit.model";
import {Viewer} from "@photo-sphere-viewer/core";
import {LeadService} from "../service/lead.service";
import {Lead, LeadStatus} from "../model/lead.model";
import {StageStatusOptions} from "../../construction/stage/stage.model";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

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
export class BrowseUnitsComponent implements OnInit, OnDestroy {
    API_URLS = API_URLS;
    buildingId: number;
    building: any;
    units: Unit[] = [];
    selectedUnitType: string = '';
    unitTypeOptions = UnitTypeOptions;
    selectedUnit: Unit | null = null;

    loading: boolean = false;
    showViewer: boolean = false;

    showContactAgent = false;
    lead: Lead = new Lead();
    errors: any = {};

    private viewer: Viewer | null = null;

    constructor(
        private route: ActivatedRoute,
        private marketplaceService: MarketplaceService
    ) {
    }

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

    toggleContactAgent(unit?: Unit) {
        this.showContactAgent = !this.showContactAgent;
        if (unit) {
            this.selectedUnit = unit;
        } else {
            this.selectedUnit = null;
        }
    }

    contactAgent(): void {
        if (this.selectedUnit) {
            const unit = this.selectedUnit;
            this.lead.interest = `${unit.name} - ${unit.type} - Floor ${unit.floor?.name}`;
        }
        this.marketplaceService.saveOpenLead(this.lead).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.toggleContactAgent();
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

    openViewer(unit: Unit) {
        this.selectedUnit = unit;

        if (!unit.image) {
            console.error('No image available for this unit');
            return;
        }

        this.showViewer = true;

        setTimeout(() => {
            if (this.viewer) {
                this.viewer.destroy();
            }

            this.viewer = new Viewer({
                container: document.querySelector('#viewer') as HTMLElement,
                panorama: `${this.API_URLS.image}/unitImages/${unit.image}`,
                navbar: ['autorotate', 'zoom', 'fullscreen'],
                defaultZoomLvl: 50,
                touchmoveTwoFingers: true,
                mousewheelCtrlKey: true
            });
        }, 100);
    }

    closeViewer() {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = null;
        }
        this.showViewer = false;
    }

    ngOnDestroy() {
        if (this.viewer) {
            this.viewer.destroy();
        }
    }

    protected readonly StageStatusOptions = StageStatusOptions;
}
