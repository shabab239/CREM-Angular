import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../util/api.response.model';
import {API_URLS} from "../../util/urls";
import {ConstructionStage, StageStatus} from "./stage.model"; // Assuming you have a ConstructionStage model

@Injectable({
    providedIn: 'root'
})
export class StageService {

    private apiUrl = API_URLS.stage;

    constructor(private http: HttpClient) {
    }

    getAllStages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    getAllStagesByStatus(status: StageStatus): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllStagesByStatus?status=${status}`);
    }

    saveStage(stage: ConstructionStage): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/save`, stage);
    }

    updateStage(stage: ConstructionStage): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.apiUrl}/update`, stage);
    }

    getStageById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    deleteStageById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    getAllStagesByBuildingId(buildingId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllStagesByBuildingId`, {params: {buildingId}});
    }

    getAllStagesByFloorId(floorId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllStagesByFloorId`, {params: {floorId}});
    }

    getAllStagesByUnitId(unitId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllStagesByUnitId`, {params: {unitId}});
    }

    getAllWorkersByStageId(stageId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllWorkersByStageId`, {params: {stageId}});
    }

    addWorkerToStage(stageId: number, workerId: number): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/addWorkerToStage?stageId=${stageId}&workerId=${workerId}`, {});
    }

}
