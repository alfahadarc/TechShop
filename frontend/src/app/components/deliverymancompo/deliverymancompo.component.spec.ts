import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymancompoComponent } from './deliverymancompo.component';

describe('DeliverymancompoComponent', () => {
  let component: DeliverymancompoComponent;
  let fixture: ComponentFixture<DeliverymancompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymancompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymancompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
