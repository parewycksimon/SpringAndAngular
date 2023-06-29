

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondComponent } from './components/second/second.component';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SecondRoutingModule,
    ],
    declarations: [
        SecondComponent,
    ]
})
export class SecondModule {
}
