import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from "../util/urls";
import {ApiResponse} from "../util/api.response.model";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl = API_URLS.dashboard;

    constructor(private http: HttpClient) {
    }

    getAdminDashboard(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/admin/overview`);
    }

    getManagerDashboard(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/manager/overview`);
    }

    getSalesDashboard(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/sales/overview`);
    }

    getCustomerDashboard(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/customer/overview`);
    }

    getProjectAnalytics(projectId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/analytics/project/${projectId}`);
    }

    getSalesAnalytics(page: number = 0, size: number = 10): Observable<ApiResponse> {
        const params = {
            page: page.toString(),
            size: size.toString()
        };
        return this.http.get<ApiResponse>(`${this.apiUrl}/analytics/sales`, {params});
    }

    getWorkforceAnalytics(page: number = 0, size: number = 10): Observable<ApiResponse> {
        const params = {
            page: page.toString(),
            size: size.toString()
        };
        return this.http.get<ApiResponse>(`${this.apiUrl}/analytics/workforce`, {params});
    }
}
