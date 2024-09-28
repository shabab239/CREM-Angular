import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Role, User} from "./model/user.model";
import {HttpClient} from "@angular/common/http";
import {Token} from "./model/token.model";
import {ApiResponse} from "../util/api.response.model";
import {API_URLS} from "../util/urls";
import {StorageUtil} from "../util/storage.util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private currentUserSubject = new BehaviorSubject<User | null>(this.getStoredUser());
    public currentUser$ = this.currentUserSubject.asObservable();

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    constructor(
        private httpClient: HttpClient
    ) {}

    login(token: Token): Observable<boolean> {
        const payload = { username: token.username, password: token.password };

        return this.httpClient.post<ApiResponse>(API_URLS.login, payload).pipe(
            map(response => {
                if (response.successful) {
                    const jwt = response.data.jwt;
                    const user = response.data.user;
                    StorageUtil.saveToLocalStorage('jwt', jwt);
                    StorageUtil.saveToLocalStorage('sessionUser', user);

                    this.isAuthenticatedSubject.next(true);
                    this.currentUserSubject.next(user);
                    return true;
                } else {
                    this.isAuthenticatedSubject.next(false);
                    this.currentUserSubject.next(null);
                    return false;
                }
            })
        );
    }

    getRole(): Observable<Role | null> {
        return this.currentUser$.pipe(
            map(user => user?.role ?? null)
        );
    }

    getCurrentUser(): Observable<User | null> {
        return this.currentUser$;
    }

    public getStoredUser(): User | null {
        return StorageUtil.getFromLocalStorage('sessionUser');
    }

    public getCompanyName(): string | null {
        let user = StorageUtil.getFromLocalStorage('sessionUser');
        if (user != null) {
            return user.company.name;
        } else {
            return null;
        }
    }

    isLoggedIn(): boolean {
        return StorageUtil.getFromLocalStorage('jwt') !== null;
    }

    logout(): void {
        StorageUtil.removeFromLocalStorage('jwt');
        StorageUtil.removeFromLocalStorage('sessionUser');

        this.isAuthenticatedSubject.next(false);
        this.currentUserSubject.next(null);
    }

    getAuthToken(): string | null {
        return StorageUtil.getFromLocalStorage('jwt');
    }

}
