import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrderProductCardComponent } from './confirm-order-product-card.component';

describe('ConfirmOrderProductCardComponent', () => {
  let component: ConfirmOrderProductCardComponent;
  let fixture: ComponentFixture<ConfirmOrderProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmOrderProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOrderProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
