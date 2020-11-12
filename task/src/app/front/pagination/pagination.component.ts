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
    @Input('pageIndex') pageIndex;
    public index = 0;

    constructor() {}

    ngOnInit() {

    }

    ngDoCheck() {
        if (this.pageIndex != -1) {
            this.index = 0;
        }//if searcher is on, set index at first place
    }

    public choosePage(page: number) {
        this.index = page;
        this.pageNumber.emit(page);
    }

}
