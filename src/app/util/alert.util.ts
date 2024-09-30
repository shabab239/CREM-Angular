
import { ApiResponse } from './api.response.model';
import Swal from 'sweetalert2';

export class AlertUtil {
    static success(response: ApiResponse): void {
        Swal.fire({
            icon: 'success',
            title: 'Message',
            text: response?.message || 'Successful',
        });
    }

    static error(error: any): void {
        if (error.message) {
            Swal.fire({
                icon: 'error',
                title: 'Message',
                text: error.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: error.error?.message || 'An error occurred',
                text: error.message,
            });
        }
    }
}
