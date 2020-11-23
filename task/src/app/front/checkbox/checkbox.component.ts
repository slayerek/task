import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

    @Input('id') id;
    @Input('desc') desc;
    @Output() type = new EventEmitter<Object>();

    constructor() {}

    ngOnInit() {
    }

    check(id, active) {
        this.type.emit({id: id, active: active})
    }

}
