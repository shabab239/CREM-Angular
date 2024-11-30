import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { API_URLS } from '../../util/urls';
import {Lead} from "../model/lead.model";

@Injectable({
    providedIn: 'root'
})
export class LeadService {

    private apiUrl = API_URLS.lead;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    save(lead: Lead): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/save`, lead);
    }

    update(lead: Lead): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.apiUrl}/update`, lead);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    getByStatus(status: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/status/${status}`);
    }

    getByCampaignId(campaignId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/campaign/${campaignId}`);
    }

    convertToCustomer(id: number): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/convertToCustomer/${id}`, null);
    }
}
