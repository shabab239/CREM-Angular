import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ProjectStatusOptions} from "../../project/project.model";
import {User} from "../../../authentication/model/user.model";
import {UserService} from "../../../hr/user.service";
import {AlertUtil} from "../../../util/alert.util";
import {FloorService} from "../floor.service";
import {Floor, FloorNameOptions} from "../floor.model";
import {Building} from "../../building/building.model";
import {BuildingService} from "../../building/building.service";

@Component({
    selector: 'app-floor-form',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './floor-form.component.html',
    styleUrl: './floor-form.component.scss'
})
export class FloorFormComponent {
    errors: { [key: string]: string } = {};

    floorNameOptions = FloorNameOptions;
    floor: Floor = new Floor();
    buildings: Building[] = [];

    constructor(
        private buildingService: BuildingService,
        private floorService: FloorService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loadUsers();
    }

    protected save(): void {
        this.floorService.save(this.floor).subscribe({
            next: response => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/project-management-page/floor-list']);
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

    private loadUsers(): void {
        this.buildingService.getAll().subscribe({
            next: response => {
                if (response && response.successful) {
                    this.buildings = response.data['buildings'];
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
