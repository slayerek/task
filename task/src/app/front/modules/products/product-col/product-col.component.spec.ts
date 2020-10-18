import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColComponent } from './product-col.component';

describe('ProductColComponent', () => {
  let component: ProductColComponent;
  let fixture: ComponentFixture<ProductColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
