import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = `${environment.apiDomain}/product`;
    public productsPerPage: number = environment.productsPerPage;
    public productsData = new BehaviorSubject([]);
    public allProductsData = new BehaviorSubject([]);
    public pageNumber = new BehaviorSubject(-1);
    public numberOfPages = new BehaviorSubject(0);
    public pages = new BehaviorSubject([]);
    public active = new BehaviorSubject(0);
    public promo = new BehaviorSubject(0);


    constructor(private http: HttpClient) {}

    public getProducts(): Observable<Product[]> {

        return this.http.get<Product[]>(this.apiUrl).pipe(
            map(
                res => {
                    return res['items'].map(
                        item => {
                            return new Product(
                                item['id'],
                                item['name'],
                                item['description'],
                                item['rating'],
                                item['image'],
                                item['promo'],
                                item['active']
                            );
                        }
                    )

                }
            )
        );

    }

    public getNumberOfPages(products: Product[]) {
        this.numberOfPages.next(Math.ceil(products.length / this.productsPerPage));

        return Math.ceil(products.length / this.productsPerPage);
    }//generate and get number of pages - need that to pagination

    public setPages(page: number, products: Product[]) {

        const numberOfPages = this.getNumberOfPages(products);
        const numbersArr = [];

        let x = page;

        for (let i = 0; i < 7; i++) {
            if (page < numberOfPages && i < 3) {
                if (page == 0) {
                    numbersArr.push({'num': x + 1});//first element
                } else if (page == numberOfPages - 1) {
                    numbersArr.push({'num': x - 1});//last element
                } else {
                    numbersArr.push({'num': x});//after first element, starting from second
                }
            }//first three pages

            if (page < numberOfPages - 8 && i == 3) {
                numbersArr.push({'num': '...'});
            }

            if (page < numberOfPages - 8 && i > 3) {
                numbersArr.push({'num': x + 3});
            }

            x++;
        }

        this.pages.next(numbersArr);

    }

}
