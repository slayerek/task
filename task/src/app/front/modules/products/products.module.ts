import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
    declarations: [ProductsComponent, ProductItemComponent],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductsModule {}
