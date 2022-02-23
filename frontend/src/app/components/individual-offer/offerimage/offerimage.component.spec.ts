import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferimageComponent } from './offerimage.component';

describe('OfferimageComponent', () => {
  let component: OfferimageComponent;
  let fixture: ComponentFixture<OfferimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
