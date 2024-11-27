import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from '@angular/router';
import {API_URLS} from '../../util/urls';
import {MarketplaceService} from "../service/marketplace.service";
import {Unit, UnitType, UnitTypeOptions} from "../../construction/project/unit/unit.model";
import {Viewer} from "@photo-sphere-viewer/core";

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

    openViewer(unit: Unit) {
        this.selectedUnit = unit;

        if (!unit.image) {
            console.error('No image available for this unit');
            return;
        }

        this.showViewer = true;

        // Short delay to ensure modal is visible
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

    contactAgent(unit: Unit): void {
        console.log('Contact request for unit:', unit);
    }
}
