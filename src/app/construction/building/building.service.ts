import {Injectable} from '@angular/core';
import {API_URLS} from "../../util/urls";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../util/api.response.model";
import {Building} from "./building.model";

@Injectable({
    providedIn: 'root'
})
export class BuildingService {
    private apiUrl = API_URLS.building;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    save(building: Building): Observable<ApiResponse> {
        const url = `${this.apiUrl}/save`;
        return this.http.post<ApiResponse>(url, building);
    }

    update(building: Building): Observable<ApiResponse> {
        const url = `${this.apiUrl}/update`;
        return this.http.put<ApiResponse>(url, building);
    }

    delete(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }

}
