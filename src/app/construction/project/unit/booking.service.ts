import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../../util/api.response.model';
import {Booking} from './booking.model';
import {API_URLS} from "../../../util/urls";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private baseUrl = API_URLS.booking;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/`);
    }

    save(booking: Booking): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/save`, booking);
    }

    update(booking: Booking): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/update`, booking);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
    }

    getByUnitId(unitId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/unit/${unitId}`);
    }

    getAllByCustomerId(customerId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/customer/${customerId}`);
    }

}
