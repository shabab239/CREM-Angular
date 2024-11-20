import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { API_URLS } from '../../util/urls';
import {Campaign} from "../model/campaign.model";

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    private apiUrl = API_URLS.campaign;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    save(campaign: Campaign): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/save`, campaign);
    }

    update(campaign: Campaign): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.apiUrl}/update`, campaign);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }
}
