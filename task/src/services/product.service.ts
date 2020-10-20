import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = 'https://join-tsh-api-staging.herokuapp.com/product';
    public productsData = new BehaviorSubject([]);

    constructor(private http: HttpClient, private router: Router) {}

    public getProducts(): Observable<Product> {

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
}
