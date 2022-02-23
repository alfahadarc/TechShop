import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericattributesComponent } from './numericattributes.component';

describe('NumericattributesComponent', () => {
  let component: NumericattributesComponent;
  let fixture: ComponentFixture<NumericattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
