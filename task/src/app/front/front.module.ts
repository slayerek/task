import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontRoutingModule} from './front-routing.module';
import {FrontComponent} from './front.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        FrontComponent,
        HeaderComponent,
        ContentComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        FrontRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class FrontModule {}
