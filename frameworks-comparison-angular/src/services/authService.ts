import { INewUser } from '../types';
import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

const env = environment.ANGULAR_APP_API_URL;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(newUser: INewUser): Observable<any> {
    return this.http.post<any>(`${env}/api/signup`, newUser).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('token', JSON.stringify(response.token));
        }
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${env}/api/signin`, { email, password }).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('token', JSON.stringify(response.token));
        }
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
