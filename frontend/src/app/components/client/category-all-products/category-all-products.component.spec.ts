import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAllProductsComponent } from './category-all-products.component';

describe('CategoryAllProductsComponent', () => {
  let component: CategoryAllProductsComponent;
  let fixture: ComponentFixture<CategoryAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
