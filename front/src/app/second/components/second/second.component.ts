

import { Component } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { forkJoin } from 'rxjs';
import { HttpService } from '../../../http.service';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent {

    fastQueryResult!: string[] | undefined;
    slowQueryResult!: string[] | undefined;
    errorMessage: string | undefined;

    constructor(private httpService: HttpService, private spinner: SpinnerVisibilityService) {
    }

    private resetFields(): void {
        this.fastQueryResult = undefined;
        this.slowQueryResult = undefined;
        this.errorMessage = undefined;
    }

    callAllQueries(): void {
        this.resetFields();

        forkJoin([
            this.httpService.runFastQuery(),
            this.httpService.runSlowQuery(),
        ])
            .subscribe(
                results => {
                    console.log(results);
                    this.fastQueryResult = results[0];
                    this.slowQueryResult = results[1];
                },
                error => this.errorMessage = error
            );
    }

    fastQuery(): void {
        this.resetFields();

        this.httpService.runFastQuery()
            .subscribe(
                results => this.fastQueryResult = results,
                error => this.errorMessage = error
            );
    }

    slowQuery(): void {
        this.resetFields();

        this.httpService.runSlowQuery()
            .subscribe(
                results => this.slowQueryResult = results,
                error => this.errorMessage = error
            );
    }

    reactiveQuery(): void {
        this.resetFields();

        this.httpService.runReactiveQuery()
            .subscribe(
                results => this.slowQueryResult = results,
                error => this.errorMessage = error
            );
    }

    forceSpinner(): void {
        this.resetFields();
        this.spinner.show();
        this.httpService.runSlowQuery().subscribe(
            () => this.spinner.hide(),
            () => this.spinner.hide()
        );
    }
}

