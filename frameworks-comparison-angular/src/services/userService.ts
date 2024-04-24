import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../types';
import { getToken } from '../utils/authUtils';
import { environment } from '../../environment';

const env = environment.ANGULAR_APP_API_URL;

interface EditUserData {
  userId: string;
  userData: IUser;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = getToken();
    if (!token) {
      throw new Error('Token not found in localStorage');
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getUsers(): Observable<any> {
    return this.http
      .get<any>(`${env}/api/users`, { headers: this.getHeaders() })
      .pipe(catchError((error) => throwError(error)));
  }

  getUserById(userId: string): Observable<any> {
    return this.http
      .get<any>(`${env}/api/users/${userId}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => throwError(error)));
  }

  editUser(userId: string, userData: any): Observable<any> {
    return this.http
      .put<any>(`${env}/api/users/${userId}`, userData, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((error) => throwError(error)));
  }
}
