import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Unit } from '../unit.model';
import { ProjectService } from '../../project.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { AlertUtil } from '../../../../util/alert.util';
import { Floor } from "../../floor/floor.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Booking } from "../booking.model";
import { BookingService } from "../booking.service";
import {UserService} from "../../../../hr/user.service";
import {User} from "../../../../authentication/model/user.model";

@Component({
    selector: 'app-units',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, ReactiveFormsModule, FormsModule],
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[] = [];
    floors: Floor[] = [];
    errors: { [key: string]: string } = {};

    showBookForm: boolean = false;
    booking: Booking = new Booking();
    customers: User[] = [];

    constructor(
        private projectService: ProjectService,
        private bookingService: BookingService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.loadUnits();
        this.loadFloors();
        this.loadCustomers();
    }

    toggleBookingForm(unit?: Unit): void {
        if (unit) {
            this.booking.unit = unit;
        }
        this.showBookForm = !this.showBookForm;
    }

    saveBooking(): void {
        this.bookingService.save(this.booking).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.showBookForm = false;
                    AlertUtil.success(response);
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

    loadCustomers(): void {
        this.userService.getAllCustomers().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.customers = response.data['users'];
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

    loadUnits(): void {
        this.projectService.getAllUnits().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.units = response.data['units'];
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

    loadFloors(): void {
        this.projectService.getAllFloors().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.floors = response.data['floors'];
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

    deleteUnit(id: number): void {
        this.projectService.deleteUnitById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadUnits();
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
