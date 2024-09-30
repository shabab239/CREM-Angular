import {Injectable} from '@angular/core';
import {API_URLS} from "../../util/urls";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../util/api.response.model";
import {Floor} from "./floor.model";

@Injectable({
    providedIn: 'root'
})
export class FloorService {

    private apiUrl = API_URLS.floor;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    save(floor: Floor): Observable<ApiResponse> {
        const url = `${this.apiUrl}/save`;
        return this.http.post<ApiResponse>(url, floor);
    }

    update(floor: Floor): Observable<ApiResponse> {
        const url = `${this.apiUrl}/update`;
        return this.http.put<ApiResponse>(url, floor);
    }

    delete(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }
}
