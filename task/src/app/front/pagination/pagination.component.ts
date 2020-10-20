import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Output() pageNumber = new EventEmitter<number>();
    @Input('numberOfPages') numberOfPages;

  constructor() { }

  ngOnInit() {
  }

  public choosePage(page: number) {
      console.log(page)
        this.pageNumber.emit(page);
    }

}
