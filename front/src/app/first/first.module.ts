

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { FirstRoutingModule } from './first-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FirstRoutingModule,
    ],
    declarations: [
        FirstComponent,
    ]
})
export class FirstModule {
}
