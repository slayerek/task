import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Output() pageNumber = new EventEmitter<number>();
    @Input('numberOfPages') numberOfPages;
    @Input('pages') pages;
    public index = 0;

    constructor() {}

    ngOnInit() {

    }

    public choosePage(page: number, direction: string) {
        this.index = page;
        this.pageNumber.emit(page);
        this.setNumbers(page, direction);
    }

    public setNumbers(page: number, direction: string) {

        const numberOfPages = this.numberOfPages;
        const numbersArr = [];

        if (page == 0 || page == 1) {
            for (let i = 0; i < 7; i++) {
                if (i < 3) {
                    numbersArr.push({'num': i + 1, 'class': ''});
                } else if (i == 3) {
                    numbersArr.push({'num': '...', 'class': ''});
                } else {
                    numbersArr.push({'num': i + 5, 'class': ''});
                }
            }
        } if (page > 1) {

            let z = 0;

            for (let i = page; i < 7 + page; i++) {
                if (z < 3 && page < numberOfPages) {
                    if (page + 1 == numberOfPages) {
                        numbersArr.push({'num': i - 1, 'class': ''});
                    } else {
                        numbersArr.push({'num': i, 'class': ''})
                    }
                } else if (z == 3 && page + 10 < numberOfPages) {
                    numbersArr.push({'num': '...', 'class': ''});
                } else if (z > 3 && page + 10 < numberOfPages) {
                    numbersArr.push({'num': i + 5, 'class': ''});
                }
                z++;
            }
        }

        this.pages = numbersArr;

    }

}
