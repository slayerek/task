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
    public allProducts: Product[] = [];
    public activeProductsData: any[] = [];
    public promoProductsData: any[] = [];
    public pages: Object = [];
    public numberOfPages: number = 0;
    public pageIndex: number;
    public activeProducts: number = 0;
    public promoProducts: number = 0;


    constructor(private products: ProductService) {}


    ngOnInit() {

        this.products.getProducts().subscribe(
            products => {

                const page = 0;
                const numberOfPages = this.products.getNumberOfPages(products);//set numberOfPages in product service

                this.numberOfPages = numberOfPages;
                this.products.setPages(page, products);



                this.products.allProductsData.next(products);//fill products
                this.products.productsData.next(products);//fill products

                const productsPerPage = this.products.productsPerPage;
                const productsNewArr = products.slice(page * productsPerPage, productsPerPage + (page * productsPerPage));

                this.productsView = productsNewArr;

            }
        );//update products when someone click pagination button

        this.products.allProductsData.subscribe(products => {
            this.allProducts = products;
        })

        this.products.pages.subscribe(pages => {
            this.pages = pages;
        });

        this.products.pageNumber.subscribe(page => {
            this.pageIndex = page;
            this.updatePaginatedProducts(page);
        });

        this.updatePaginatedProducts(0);//set products at firts load - need that to pagination

        this.getActivePromoProducts('active');
        this.getActivePromoProducts('promo');

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

    private getActivePromoProducts(checkboxType = 'active') {
        this.products[checkboxType].subscribe(active => {

            let productsFound = [];
            let allProds = [];

            this.products.pageNumber.next(0);

            if (active == 1) {

                this.products.allProductsData.subscribe(products => {
                    productsFound = products.filter((item) => {
                        return item[checkboxType] == 1;
                    });
                });

                if (productsFound.length) {

                    allProds = productsFound;

                    if (checkboxType == 'active') {

                        this.activeProducts = 1;
                        this.activeProductsData = this.activeProductsData.concat(productsFound);

                        if (this.promoProducts) {
                            allProds = this.activeProductsData.concat(this.promoProductsData);
                        }

                    } else if (checkboxType == 'promo') {

                        this.promoProducts = 1;
                        this.promoProductsData = this.promoProductsData.concat(productsFound);

                        if (this.activeProducts) {
                            allProds = this.promoProductsData.concat(this.activeProductsData);
                        }
                    }


                }

            } else if (active == 0) {

                if (checkboxType == 'active') {

                    this.activeProducts = 0;
                    this.activeProductsData.length = 0;

                    if (this.promoProducts) {
                        allProds = this.activeProductsData.concat(this.promoProductsData);
                    }

                } else if (checkboxType == 'promo') {

                    this.promoProducts = 0;
                    this.promoProductsData.length = 0;

                    if (this.activeProducts) {
                        allProds = this.promoProductsData.concat(this.activeProductsData);
                    }

                }

                if (allProds.length < 1) {
                    allProds = this.allProducts;
                }

            }

            this.products.productsData.next(allProds);

        });
    }

}
