import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductColComponent } from './product-col/product-col.component';


@NgModule({
    declarations: [ProductsComponent, ProductItemComponent, ProductColComponent],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductsModule {}
