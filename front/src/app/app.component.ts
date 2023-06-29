

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgHttpLoaderComponent, PendingRequestsInterceptor } from 'ng-http-loader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild('ngHttpLoader')
    ngHttpLoader!: NgHttpLoaderComponent;

    constructor(private pendingRequestsInterceptor: PendingRequestsInterceptor) {
    }

    ngOnInit(): void {
        this.pendingRequestsInterceptor.pendingRequestsStatus$.subscribe(pending => {
            if (!pending) {
                console.log('No HTTP requests pending anymore');
            }
        });
    }

    ngAfterViewInit(): void {
        this.ngHttpLoader.isVisible$.subscribe(v => {
            if (!v) {
                console.log('No HTTP requests pending anymore (from ngAfterViewInit)');
            }
        });
    }
}
