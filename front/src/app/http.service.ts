

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    runFastQuery(): Observable<string[]> {
        return this.http.post(
            'api/fast',
            null
        ).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    runSlowQuery(): Observable<string[]> {
        return this.http.get('http://localhost:10000/my-context/path/api/slow',
            {
                headers: {
                    'x-requested-with': 'XmlHttpRequest'
                }
            }
        ).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    runReactiveQuery(): Observable<string[]> {
        return this.http
            .get('api/slow-but-reactive')
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    private extractData(res: any): any {
        return res || {};
    }

    private handleError(error: HttpErrorResponse | any): Observable<never> {
        console.log(error);
        return throwError(error);
    }
}
