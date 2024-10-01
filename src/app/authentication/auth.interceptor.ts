import { HttpErrorResponse, HttpHandlerFn, HttpRequest, HttpEvent } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const authService = inject(AuthService);
    const router = inject(Router);
    const jwt = authService.getAuthToken();

    if (req.url.endsWith('/login')) {
        return next(req);
    } else {
        const newReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${jwt}`),
        });

        return next(newReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    authService.logout();
                    router.navigate(['/authentication']);
                }
                return throwError(() => error);
            })
        );
    }
}
