import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from "../../util/urls";
import {Task} from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl = API_URLS.task;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(`${this.apiUrl}/`);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    save(task: Task): Observable<any> {
        return this.http.post(`${this.apiUrl}/save`, task);
    }

    update(task: Task): Observable<any> {
        return this.http.put(`${this.apiUrl}/update`, task);
    }

    markAsCompleted(id: number): Observable<any> {
        return this.http.post(`${this.apiUrl}/markAsCompleted`, {id});
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}
