import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../../util/api.response.model';
import {RawMaterial} from './model/raw-material.model';
import {API_URLS} from '../../../util/urls';
import {RawMaterialOrder} from "./model/raw-material-order.model";
import {RawMaterialStock} from "./model/raw-material-stock.model";
import {RawMaterialUsage} from "./model/raw-material-usage.model";

@Injectable({
    providedIn: 'root'
})
export class RawMaterialService {
    private baseUrl = API_URLS.rawMaterial;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/`);
    }

    save(rawMaterial: RawMaterial): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/save`, rawMaterial);
    }

    update(rawMaterial: RawMaterial): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/update`, rawMaterial);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    getAllOrders(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/orders`);
    }

    saveOrder(rawMaterialOrder: RawMaterialOrder): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/orders/save`, rawMaterialOrder);
    }

    updateOrder(rawMaterialOrder: RawMaterialOrder): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/orders/update`, rawMaterialOrder);
    }

    getOrderById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/orders/${id}`);
    }

    deleteOrderById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/orders/${id}`);
    }

    getAllStocks(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/stocks`);
    }

    saveStock(rawMaterialStock: RawMaterialStock): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/stocks/save`, rawMaterialStock);
    }

    updateStock(rawMaterialStock: RawMaterialStock): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/stocks/update`, rawMaterialStock);
    }

    getStockById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/stocks/${id}`);
    }

    deleteStockById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/stocks/${id}`);
    }

    getAllUsages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/usages`);
    }

    getAllUsagesByStageId(stageId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/usages/${stageId}`);
    }

    saveRawMaterialUsage(rawMaterialUsage: RawMaterialUsage): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/usage/save`, rawMaterialUsage);
    }

}
