import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public productsView: Product[] = [];
    public numberOfPages: number = 0;
    public pages;
    public pageIndex: number;

    constructor(private products: ProductService) {}


    ngOnInit() {

        this.products.getProducts().subscribe(
            products => {

                const page = 0;
                const numberOfPages = this.products.getNumberOfPages(products);//set numberOfPages in product service

                this.numberOfPages = numberOfPages;
                this.products.setPages(page, products);



                this.products.productsData.next(products);//fill products

                const productsPerPage = this.products.productsPerPage;
                const productsNewArr = products.slice(page * productsPerPage, productsPerPage + (page * productsPerPage));

                this.productsView = productsNewArr;

            }
        );//update products when someone click pagination button

        this.products.pages.subscribe(pages => {
            this.pages = pages;
        });

        this.products.pageNumber.subscribe(page => {
            this.pageIndex = page;
            this.updatePaginatedProducts(page);
        });

        this.updatePaginatedProducts(0);//set products at firts load - need that to pagination

    }

    public choosePage(pageNumber: number): void {
        this.pageIndex = -1;
        this.updatePaginatedProducts(pageNumber);
    }

    private updatePaginatedProducts(page: number): void {

        this.products.productsData.subscribe(products => {

            this.numberOfPages = this.products.getNumberOfPages(products);//set numberOfPages in product service
            this.products.setPages(page, products);

            const productsPerPage = this.products.productsPerPage;
            const productsNewArr = products.slice(page * productsPerPage, productsPerPage + (page * productsPerPage));

            this.productsView = productsNewArr;

        });

    }

}
