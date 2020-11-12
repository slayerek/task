import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductNotFoundComponent} from './product-not-found/product-not-found.component';

const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'product-not-found', component: ProductNotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
