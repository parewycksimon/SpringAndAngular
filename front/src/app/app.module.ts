

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BasehrefInterceptorProvider } from './basehref-interceptor.service';
import { AppBaseHrefWithoutStaticProvider } from './factory/app-base-href-without-static-provider.factory';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgHttpLoaderModule.forRoot(),
    ],
    bootstrap: [AppComponent],
    providers: [
        AppBaseHrefWithoutStaticProvider,
        BasehrefInterceptorProvider,
    ]
})
export class AppModule {
}
