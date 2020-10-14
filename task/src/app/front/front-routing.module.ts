import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FrontComponent} from './front.component';

const routes: Routes = [
    {
        path: '', component: FrontComponent,
        children: [
            {path: '', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule {}
