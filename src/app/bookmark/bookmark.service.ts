import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { throwError } from 'rxjs';
import { map, catchError, retry, delay } from 'rxjs/operators';

import { Bookmark } from './models/bookmark.interface';

import { APP_CONFIG } from '../app.config';

const BOOKMARK_API = `${environment.api_url}/bookmarks/`;

@Injectable()
export class BookmarkService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return throwError(error['error'] || 'backend server error');
    }
    return throwError(error || 'backend server error');
  }

  getBookmarks() {
    return this.http
      .get(BOOKMARK_API, { headers: this.headers })
      .pipe(
        map((response: Bookmark[]) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );

  }
  getFavorites() {
    return this.http
      .get(`${BOOKMARK_API}?favorite=true`, { headers: this.headers })
      .pipe(
        map((response: Bookmark[]) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );

  }

  getBookmark(id: number) {
    return this.http
      .get(`${BOOKMARK_API}/${id}`, { headers: this.headers })
      .pipe(
        map((response: Bookmark) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );

  }

  addBookmark(bookmark: Bookmark) {
    return this.http
      .post(`${BOOKMARK_API}`, bookmark, { headers: this.headers })
      .pipe(
        map((response: Bookmark) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );
  }

  updateBookmark(bookmark: Bookmark) {
    return this.http
      .put(`${BOOKMARK_API}/${bookmark.id}`, bookmark, { headers: this.headers })
      .pipe(
        map((response: Bookmark) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );
  }

  removeBookmark(id: number) {
    return this.http
      .delete(`${BOOKMARK_API}/${id}`, { headers: this.headers })
      .pipe(
        map((response: Bookmark) => response),
        delay(APP_CONFIG.DELAY_REQUEST),
        retry(APP_CONFIG.RETRY_COUNT),
        catchError((error: any) => this.handleError(error))
      );
  }

}
