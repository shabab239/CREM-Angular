import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../util/api.response.model';
import { Payment } from './payment.model';
import {API_URLS} from "../../../util/urls";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = API_URLS.payment;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/`);
  }

  save(payment: Payment): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/save`, payment);
  }

  getById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  getAllByCustomerId(customerId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/customer/${customerId}`);
  }

}
