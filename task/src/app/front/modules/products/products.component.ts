import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    //public productsView: Product;
    public productsView;

    constructor(private products: ProductService) {}

    ngOnInit() {

        const produkty = [{"id": 1, "name": "Handmade Cotton Towels", "description": "Eos cum doloremque reprehenderit consequatur modi veritatis.", "rating": 5, "image": "https://picsum.photos/640/480?random=1412", "promo": true, "active": false}, {"id": 2, "name": "Generic Soft Pants", "description": "Quo quo hic exercitationem provident.", "rating": 3, "image": "https://picsum.photos/640/480?random=812", "promo": true, "active": true}, {"id": 3, "name": "Rustic Rubber Car", "description": "Repellat quae dolor quisquam possimus modi voluptas.", "rating": 2, "image": "https://picsum.photos/640/480?random=8274", "promo": false, "active": false}, {"id": 4, "name": "Practical Concrete Car", "description": "Voluptatum itaque aspernatur.", "rating": 3, "image": "https://picsum.photos/640/480?random=6315", "promo": true, "active": false}, {"id": 5, "name": "Practical Steel Sausages", "description": "Veniam est deserunt minus voluptate voluptatibus.", "rating": 5, "image": "https://picsum.photos/640/480?random=8629", "promo": true, "active": false}, {"id": 6, "name": "Generic Concrete Pants", "description": "Architecto aut illo eos est.", "rating": 1, "image": "https://picsum.photos/640/480?random=2050", "promo": true, "active": false}, {"id": 7, "name": "Fantastic Metal Sausages", "description": "Consequatur et est laboriosam in rerum sequi deserunt eaque est.", "rating": 1, "image": "https://picsum.photos/640/480?random=6385", "promo": false, "active": false}, {"id": 8, "name": "Unbranded Rubber Gloves", "description": "Laborum et distinctio qui ipsa doloribus.", "rating": 4, "image": "https://picsum.photos/640/480?random=1546", "promo": false, "active": false}, {"id": 9, "name": "Refined Plastic Fish", "description": "Est dolorem eum hic iste fugiat doloremque.", "rating": 4, "image": "https://picsum.photos/640/480?random=7493", "promo": false, "active": true}, {"id": 10, "name": "Sleek Steel Keyboard", "description": "Expedita repudiandae et veniam.", "rating": 3, "image": "https://picsum.photos/640/480?random=4566", "promo": true, "active": false}, {"id": 11, "name": "Practical Wooden Shoes", "description": "Quos enim vel dignissimos architecto explicabo vitae sint esse.", "rating": 2, "image": "https://picsum.photos/640/480?random=4631", "promo": true, "active": true}];

        this.productsView = produkty;
        //this.products.getProducts().subscribe(res => {
        //    this.productsView = res;
        // });


    }

}
