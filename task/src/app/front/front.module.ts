import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontRoutingModule} from './front-routing.module';
import {FrontComponent} from './front.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';


@NgModule({
    declarations: [
        FrontComponent,
        HeaderComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        FrontRoutingModule
    ]
})
export class FrontModule {}
