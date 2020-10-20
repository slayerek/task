import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public productsView: Product[];
    public numberOfPages: number[];
    private productsPerPage: number = 8;

    constructor(private products: ProductService) {}

    ngOnInit() {

        this.products.getProducts().subscribe(
            products => {
                this.numberOfPages = this.getNumberOfPages(products);
            }
        );//first load - get number of products pages - need that to pagination

        this.updatePaginatedProducts(0);//set products at firts load - need that to pagination

        this.products.productsData.subscribe(
            products => {
                this.productsView = products;
            }
        );//update products when someone click pagination button number

    }

    public choosePage(pageNumber: number): void {
        this.updatePaginatedProducts(pageNumber);
    }

    private getNumberOfPages(products : Product[]): number[] {
        return new Array(Math.ceil(products.length / this.productsPerPage));
    }//generate and get number of pages - need that to pagination

    private updatePaginatedProducts(page: number): void {
        this.products.getProducts().subscribe(products => {

            const productsNewArr = products.slice(page * this.productsPerPage, this.productsPerPage + (page * this.productsPerPage));
            this.products.productsData.next(productsNewArr);
        });
    }

}
