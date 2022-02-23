import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmanufacturerComponent } from './allmanufacturer.component';

describe('AllmanufacturerComponent', () => {
  let component: AllmanufacturerComponent;
  let fixture: ComponentFixture<AllmanufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmanufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
