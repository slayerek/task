import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {ProductService} from '../../../services/product.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public searchField: FormControl;
    public searches: string[] = [];


    constructor(private products: ProductService, private router: Router) {}

    ngOnInit() {
        this.searchField = new FormControl();
        this.searchField.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe(res => {
                this.productsResults(res);
            });
    }

    private productsResults(res) {

        let productsFound = [];

        this.products.getProducts().subscribe(products => {

            productsFound = products.filter((item) => {
                if (RegExp(res, "i").test(item['name'])) {
                    return item;
                }
            });

            if (productsFound.length) {

                if (this.router.url === '/product-not-found') {
                    this.router.navigate(['/']);
                }
                setTimeout(() => {

                    const page = 0;

                    this.products.pageNumber.next(page);

                    this.products.productsData.next(productsFound);
                    this.products.setPages(page, productsFound);

                }, 500);

            } else {
                this.router.navigate(['/product-not-found']);
            }

        });

    }

}
