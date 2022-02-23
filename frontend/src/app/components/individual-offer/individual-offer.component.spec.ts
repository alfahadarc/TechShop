import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualOfferComponent } from './individual-offer.component';

describe('IndividualOfferComponent', () => {
  let component: IndividualOfferComponent;
  let fixture: ComponentFixture<IndividualOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
