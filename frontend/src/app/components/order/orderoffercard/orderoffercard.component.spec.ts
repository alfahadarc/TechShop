import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderoffercardComponent } from './orderoffercard.component';

describe('OrderoffercardComponent', () => {
  let component: OrderoffercardComponent;
  let fixture: ComponentFixture<OrderoffercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderoffercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderoffercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
