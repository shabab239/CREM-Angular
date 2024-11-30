import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './model/transaction.model';
import {API_URLS} from "../util/urls";
import {ApiResponse} from "../util/api.response.model";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private baseUrl = API_URLS.transaction;

    constructor(private http: HttpClient) {
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/`);
    }

    save(transaction: Transaction): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/save`, transaction);
    }

    update(transaction: Transaction): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/update`, transaction);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    getAllByGroupTransactionId(groupTransactionId: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/groupTransaction?groupTransactionId=${groupTransactionId}`);
    }

    getIncomeStatement(startDate: string, endDate: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(
            `${this.baseUrl}/profit-loss?startDate=${startDate}&endDate=${endDate}`
        );
    }

    getCashFlowStatement(startDate: string, endDate: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(
            `${this.baseUrl}/cash-flow?startDate=${startDate}&endDate=${endDate}`
        );
    }
}
