

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren : () => import('./first/first.module').then(m => m.FirstModule)
    },
    {
        path: 'iam/a/very/long/url',
        loadChildren : () => import('./second/second.module').then(m => m.SecondModule)

    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
