import {Injectable} from '@angular/core';
import {API_URLS} from "../util/urls";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../util/api.response.model";
import {LedgerHead} from "./model/ledger-head.model";

@Injectable({
    providedIn: 'root'
})
export class LedgerService {
    private baseUrl = API_URLS.ledger;

    constructor(private http: HttpClient) {
    }

    getAllLedgerHeads(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/ledgerHeads`);
    }

    getLedgerHeadById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/ledgerHeads/${id}`);
    }

    saveLedgerHead(ledgerHead: LedgerHead): Observable<ApiResponse> {
        if (ledgerHead.id) {
            return this.updateLedgerHead(ledgerHead);
        }
        return this.http.post<ApiResponse>(`${this.baseUrl}/ledgerHeads/save`, ledgerHead);
    }

    updateLedgerHead(ledgerHead: LedgerHead): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/ledgerHeads/update`, ledgerHead);
    }

}
