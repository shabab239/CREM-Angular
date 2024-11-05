import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";
import {LedgerHead, LedgerHeadType} from "../model/ledger-head.model";
import {LedgerService} from "../ledger.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-ledger-heads',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './ledger-heads.component.html',
    styleUrl: './ledger-heads.component.scss'
})
export class LedgerHeadsComponent implements OnInit {

    errors: { [key: string]: string } = {};
    showNewLedgerHead = false;

    ledgerHead: LedgerHead = new LedgerHead();
    ledgerHeads: LedgerHead[] = [];
    headTypeOptions = Object.values(LedgerHeadType);


    constructor(private ledgerService: LedgerService) {
    }

    ngOnInit(): void {
        this.loadLedgerHeads();
    }

    toggleLedgerHeadForm(dismiss: boolean, ledgerHeadId?: number,) {
        if (dismiss) {
            this.ledgerHead = new LedgerHead();
        } else {
            if (ledgerHeadId) {
                this.loadLedgerHead(ledgerHeadId);
            }
        }
        this.showNewLedgerHead = !this.showNewLedgerHead;
    }

    loadLedgerHeads(): void {
        this.ledgerService.getAllLedgerHeads().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.ledgerHeads = response.data['ledgerHeads'];
                } else {
                    AlertUtil.error(response.message);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    loadLedgerHead(ledgerHeadId: number): void {
        this.ledgerService.getLedgerHeadById(ledgerHeadId).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.ledgerHead = response.data['ledgerHead'];
                } else {
                    AlertUtil.error(response.message);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    saveLedgerHead(): void {
        this.ledgerService.saveLedgerHead(this.ledgerHead).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.ledgerHead = new LedgerHead();
                    this.loadLedgerHeads();
                    this.showNewLedgerHead = false;
                    AlertUtil.success(response);
                } else {
                    AlertUtil.error(response.message);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

}
