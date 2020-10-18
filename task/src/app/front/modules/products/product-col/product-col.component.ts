import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-col',
  templateUrl: './product-col.component.html',
  styleUrls: ['./product-col.component.css']
})
export class ProductColComponent implements OnInit {

    @Input('products') products;
    @Input('number') number;

  constructor() { }

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
