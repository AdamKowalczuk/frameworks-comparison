import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INewPost, IUpdatePost } from '../types';
import { getToken } from '../utils/authUtils';
import { environment } from '../../environment';

const env = environment.ANGULAR_APP_API_URL;
@Injectable({
  providedIn: 'root',
})
export class PostService {
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

  getPosts(): Observable<any> {
    return this.http
      .get<any>(`${env}/api/posts`, { headers: this.getHeaders() })
      .pipe(catchError((error) => throwError(error)));
  }

  createPost(postData: any): Observable<any> {
    return this.http
      .post<any>(`${env}/api/posts`, postData, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((error) => throwError(error)));
  }

  editPostById(postId: string, postData: IUpdatePost): Observable<any> {
    return this.http
      .put<any>(`${env}/api/posts/${postId}`, postData, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((error) => throwError(error)));
  }

  getPostById(postId: string): Observable<any> {
    return this.http
      .get<any>(`${env}/api/posts/${postId}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => throwError(error)));
  }

  searchPosts(query: string): Observable<any> {
    return this.http
      .get<any>(`${env}/api/posts/search/${query}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((error) => throwError(error)));
  }

  deletePostById(postId: string): Observable<any> {
    return this.http
      .delete<any>(`${env}/api/posts/${postId}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => throwError(error)));
  }

  likePostById(postId: string): Observable<any> {
    return this.http
      .post<any>(
        `${env}/api/posts/${postId}/like`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(catchError((error) => throwError(error)));
  }

  unlikePostById(postId: string): Observable<any> {
    return this.http
      .post<any>(
        `${env}/api/posts/${postId}/unlike`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(catchError((error) => throwError(error)));
  }

  savePostById(postId: string): Observable<any> {
    return this.http
      .post<any>(
        `${env}/api/posts/${postId}/save`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(catchError((error) => throwError(error)));
  }

  unsavePostById(postId: string): Observable<any> {
    return this.http
      .post<any>(
        `${env}/api/posts/${postId}/unsave`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(catchError((error) => throwError(error)));
  }

  getLikedPosts(userId: string): Observable<any> {
    return this.http
      .get<any>(`${env}/api/posts/liked/${userId}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((error) => throwError(error)));
  }
}
