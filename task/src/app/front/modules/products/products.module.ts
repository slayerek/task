import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';


@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductsModule {}
