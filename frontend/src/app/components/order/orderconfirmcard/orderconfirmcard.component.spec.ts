import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconfirmcardComponent } from './orderconfirmcard.component';

describe('OrderconfirmcardComponent', () => {
  let component: OrderconfirmcardComponent;
  let fixture: ComponentFixture<OrderconfirmcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderconfirmcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfirmcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
