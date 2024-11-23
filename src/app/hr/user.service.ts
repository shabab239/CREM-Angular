import { Injectable } from '@angular/core';
import {API_URLS} from "../util/urls";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../util/api.response.model";
import {User} from "../authentication/model/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = API_URLS.user;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/`);
    }

    getAllCustomers(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/customers`);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    save(user: User, avatarFile?: File): Observable<ApiResponse> {
        const formData = new FormData();
        formData.append('user', new Blob([JSON.stringify(user)], {type: 'application/json'}));

        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        return this.http.post<ApiResponse>(`${this.apiUrl}/save`, formData);
    }

    update(user: User, avatarFile?: File): Observable<ApiResponse> {

        const formData = new FormData();
        formData.append('user', new Blob([JSON.stringify(user)], {type: 'application/json'}));

        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        return this.http.put<ApiResponse>(`${this.apiUrl}/update`, formData);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    getCustomerById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/customer/${id}`);
    }

    getAllManagers(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/managers`);
    }

    getManagerById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/manager/${id}`);
    }

    getAllEmployees(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/employees`);
    }

    getEmployeeById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/employee/${id}`);
    }

    getAllAdmins(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/admins`);
    }

    getAdminById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/admin/${id}`);
    }

    getAllOwners(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/owners`);
    }

    getOwnerById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/owner/${id}`);
    }
}
