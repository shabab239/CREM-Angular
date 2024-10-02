import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiResponse} from "../util/api.response.model";
import {Account} from "./account.model";
import {API_URLS} from "../util/urls";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = API_URLS.account;

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/`);
  }

  save(account: Account): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/save`, account);
  }

  update(account: Account): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/update`, account);
  }

  deleteById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  getAllByCompanyId(companyId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/company/${companyId}`);
  }

  getByIdAndCompanyId(id: number, companyId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/company/${companyId}/account/${id}`);
  }
}
