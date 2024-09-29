import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../util/api.response.model";
import {API_URLS} from "../../util/urls";
import {Project} from "./project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    private apiUrl = API_URLS.project;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    create(project: Project): Observable<ApiResponse> {
        const url = `${this.apiUrl}/save`;
        return this.http.post<ApiResponse>(url, project);
    }

    update(project: Project): Observable<ApiResponse> {
        const url = `${this.apiUrl}/update`;
        return this.http.put<ApiResponse>(url, project);
    }

    delete(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }
}
