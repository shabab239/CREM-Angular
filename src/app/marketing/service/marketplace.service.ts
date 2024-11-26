import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { API_URLS } from '../../util/urls';
import {UnitSearchDTO} from "../dto/UnitSearchDTO";

@Injectable({
    providedIn: 'root'
})
export class MarketplaceService {
    private apiUrl = API_URLS.marketplace;

    constructor(private http: HttpClient) {}

    getAllAvailableBuildings(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/buildings`);
    }

    getBuildingsByBuildingType(selectedBuildingType: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getBuildingsByBuildingType?type=${selectedBuildingType}`);
    }

    getBuildingWithAvailableUnits(buildingId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/buildings/${buildingId}`);
    }

    getUnitDetails(unitId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/units/${unitId}`);
    }

    searchAvailableUnits(
        criteria: UnitSearchDTO,
        page: number = 0,
        size: number = 10
    ): Observable<ApiResponse> {
        const params = {
            ...criteria,
            page: page.toString(),
            size: size.toString()
        };
        return this.http.get<ApiResponse>(`${this.apiUrl}/units/search`, { params });
    }

    getUnitsByBuildingType(buildingType: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/units/building-type/${buildingType}`);
    }
}
