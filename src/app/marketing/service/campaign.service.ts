import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../util/api.response.model';
import {API_URLS} from '../../util/urls';
import {Campaign} from "../model/campaign.model";

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    private apiUrl = API_URLS.campaign;

    constructor(private http: HttpClient) {
    }

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

    getByStatus(status: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/status/${status}`);
    }

    getByStartDateRange(startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/start-date-range?startDate=${startDate}&endDate=${endDate}`);
    }

    getByEndDateRange(startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/end-date-range?startDate=${startDate}&endDate=${endDate}`);
    }

    getByDateRange(startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/date-range?startDate=${startDate}&endDate=${endDate}`);
    }

    getByNameAndDateRange(name: string, startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/name-date-range?name=${name}&startDate=${startDate}&endDate=${endDate}`);
    }
}
