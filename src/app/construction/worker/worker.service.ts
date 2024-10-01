import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from './worker.model';
import {ApiResponse} from "../../util/api.response.model";
import {AttendanceStatus, WorkerAttendance} from "./worker.attendance.model";
import {API_URLS} from "../../util/urls";
import {formatDate} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class WorkerService {
    private baseUrl = API_URLS.worker;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/getAll`);
    }

    save(worker: Worker, avatarFile: File): Observable<ApiResponse> {
        const formData: FormData = new FormData();
        if (avatarFile) {
            formData.append('avatarFile', avatarFile);
        }
        formData.append('worker', new Blob([JSON.stringify(worker)], {type: 'application/json'}));

        return this.http.post<ApiResponse>(`${this.baseUrl}/save`, formData);
    }

    update(worker: Worker, avatarFile: File): Observable<ApiResponse> {
        const formData: FormData = new FormData();
        if (avatarFile) {
            formData.append('avatarFile', avatarFile);
        }
        formData.append('worker', new Blob([JSON.stringify(worker)], {type: 'application/json'}));

        return this.http.put<ApiResponse>(`${this.baseUrl}/update`, formData);
    }

    getById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/getById`, {params: {id: id.toString()}});
    }

    deleteById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/deleteById`, {params: {id: id.toString()}});
    }

    saveAttendance(workerAttendance: WorkerAttendance): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/attendance/save`, workerAttendance);
    }

    recordAttendance(attendanceId: number, attendance: string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(
            `${this.baseUrl}/attendance/recordAttendance?attendanceId=${attendanceId}&attendance=${attendance}`,
            {}
        );
    }

    getAttendanceByStageIdAndDate(stageId: number, date: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getAttendanceByStageIdAndDate`, {
            params: {
                stageId: stageId.toString(),
                date: formatDate(date, 'yyyy-MM-dd', 'en')
            }
        });
    }

    updateAttendance(workerAttendance: WorkerAttendance): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(`${this.baseUrl}/attendance/update`, workerAttendance);
    }

    deleteAttendanceById(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.baseUrl}/attendance/deleteById`, {params: {id: id.toString()}});
    }

    getAttendanceById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getById`, {params: {id: id.toString()}});
    }

    getAllAttendance(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getAll`);
    }

    getAttendanceByWorkerId(workerId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByWorkerId`, {params: {workerId: workerId.toString()}});
    }

    getAttendanceByDate(date: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByDate`, {params: {date: date.toISOString()}});
    }

    getAttendanceByWorkerIdAndDate(workerId: number, date: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByWorkerIdAndDate`, {
            params: {
                workerId: workerId.toString(),
                date: date.toISOString()
            }
        });
    }

    getAttendanceByWorkerIdAndDateRange(workerId: number, startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByWorkerIdAndDateRange`, {
            params: {
                workerId: workerId.toString(),
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        });
    }

    getAttendanceByDateRange(startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByDateRange`, {
            params: {
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        });
    }

    getAttendanceByWorkerIdAndDateRangeAndStatus(workerId: number, startDate: Date, endDate: Date, status: AttendanceStatus): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByWorkerIdAndDateRangeAndStatus`, {
            params: {
                workerId: workerId.toString(),
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                status: status.toString()
            }
        });
    }

    getAttendanceByDateRangeAndStatus(startDate: Date, endDate: Date, status: AttendanceStatus): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByDateRangeAndStatus`, {
            params: {
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                status: status.toString()
            }
        });
    }

    getAttendanceByWorkerIdAndStatus(workerId: number, status: AttendanceStatus): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByWorkerIdAndStatus`, {
            params: {
                workerId: workerId.toString(),
                status: status.toString()
            }
        });
    }

    getAttendanceByStatus(status: AttendanceStatus): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByStatus`, {params: {status: status.toString()}});
    }

    getAttendanceByStatusAndDate(status: AttendanceStatus, date: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByStatusAndDate`, {
            params: {
                status: status.toString(),
                date: date.toISOString()
            }
        });
    }

    getAttendanceByStatusAndDateRange(status: AttendanceStatus, startDate: Date, endDate: Date): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUrl}/attendance/getByStatusAndDateRange`, {
            params: {
                status: status.toString(),
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        });
    }
}
