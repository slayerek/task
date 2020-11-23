import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private products: ProductService) {}

    ngOnInit() {
    }

    check(obj) {

        let checked = 0;

        if (obj['active'] == true) {
            checked = 1;
        } else {
            checked = 0;
        }

        if (obj['id'] == 'inlineCheckboxPromo') {
            this.products.promo.next(checked);
        } else if ('inlineCheckboxActive') {
            this.products.active.next(checked);
        }

    }

}
