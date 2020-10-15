import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../../models/product.model';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input('products') products: Product;

    constructor() {}

    ngOnInit() {
    }

    private truncateText(text) {

        const arr = text.split(' ');
        let newDesc;

        newDesc = arr.reduce((total, currentValue, currentIndex, arr) => {

            if (total.length - 1 < 20) {
                total += ' ' + currentValue;
            }

            return total;

        });

        return newDesc + '...';

    }

}
