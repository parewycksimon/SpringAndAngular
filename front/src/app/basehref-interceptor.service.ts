

import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ExistingProvider, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BasehrefInterceptor implements HttpInterceptor {

    constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.toLocaleLowerCase().startsWith('http')) {
            const clonedReq = req.clone({ url: this.baseHref + req.url });
            return next.handle(clonedReq);
        }

        return next.handle(req);
    }
}

export const BasehrefInterceptorProvider: ExistingProvider[] = [{
    provide: HTTP_INTERCEPTORS,
    useExisting: BasehrefInterceptor,
    multi: true
}];
