import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../util/api.response.model';
import { API_URLS } from '../../util/urls';
import { Conversation } from "../model/conversation.model";

@Injectable({
    providedIn: 'root'
})
export class ConversationService {

    private apiUrl = API_URLS.conversation;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/all`);
    }

    getAllByLeadId(leadId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/getAllByLeadId?leadId=${leadId}`);
    }

    save(conversation: Conversation): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.apiUrl}/save`, conversation);
    }

    update(conversation: Conversation): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.apiUrl}/update`, conversation);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
    }

    getByDateRange(startDate: Date, endDate: Date): Observable<ApiResponse> {
        const start = startDate.toISOString().split('T')[0];
        const end = endDate.toISOString().split('T')[0];
        return this.http.get<ApiResponse>(`${this.apiUrl}/date-range?startDate=${start}&endDate=${end}`);
    }

    getByCustomerId(customerId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/customer/${customerId}`);
    }

    getByEmployeeId(employeeId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/employee/${employeeId}`);
    }

    getByLeadId(leadId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/lead/${leadId}`);
    }
}

