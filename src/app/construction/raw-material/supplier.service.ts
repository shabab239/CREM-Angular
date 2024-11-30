import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Supplier} from "./model/supplier.model";
import {API_URLS} from "../../util/urls";
import {ApiResponse} from "../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = API_URLS.supplier;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/`);
  }

  save(supplier: Supplier): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/save`, supplier);
  }

  update(supplier: Supplier): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/update`, supplier);
  }

  getById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }
}
