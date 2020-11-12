import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductColComponent } from './product-col/product-col.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductItemComponent,
        ProductColComponent,
        PaginationComponent,
        ProductNotFoundComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductsModule {}
