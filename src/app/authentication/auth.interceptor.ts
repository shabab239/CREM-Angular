import {HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const jwt = inject(AuthService).getAuthToken();
    if (req.url.endsWith('/login')) {
        return next(req);
    } else {
        const newReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${jwt}`),
        });
        return next(newReq);
    }
}
