import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() {}

    public getProduct() {

        const apiUrl = 'https://join-tsh-api-staging.herokuapp.com/product';

    }
}
