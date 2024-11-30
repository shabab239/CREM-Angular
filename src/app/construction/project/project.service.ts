import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { API_URLS } from '../../util/urls';
import { Project } from './project.model';
import {Building} from "../building/building.model";
import {Floor} from "../floor/floor.model";
import {Unit} from "../unit/unit.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = API_URLS.project;

  constructor(private http: HttpClient) {}

  // Project APIs
  getAllProjects(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  saveProject(project: Project): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/save`, project);
  }

  updateProject(project: Project): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/update`, project);
  }

  getProjectById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  deleteProjectById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  // Building APIs
  getAllBuildings(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/buildings`);
  }

  saveBuilding(building: Building): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/building/save`, building);
  }

  updateBuilding(building: Building): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/building/update`, building);
  }

  getBuildingById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/building/${id}`);
  }

  deleteBuildingById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/building/${id}`);
  }

  // Floor APIs
  getAllFloors(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/floors`);
  }

  saveFloor(floor: Floor): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/floor/save`, floor);
  }

  updateFloor(floor: Floor): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/floor/update`, floor);
  }

  getFloorById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/floor/${id}`);
  }

  deleteFloorById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/floor/${id}`);
  }

  // Unit APIs
  getAllUnits(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/units`);
  }

  saveUnit(unit: Unit): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/unit/save`, unit);
  }

  updateUnit(unit: Unit): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/unit/update`, unit);
  }

  getUnitById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/unit/${id}`);
  }

  deleteUnitById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/unit/${id}`);
  }
}
