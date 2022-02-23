import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmorderoffercardComponent } from './confirmorderoffercard.component';

describe('ConfirmorderoffercardComponent', () => {
  let component: ConfirmorderoffercardComponent;
  let fixture: ComponentFixture<ConfirmorderoffercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmorderoffercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmorderoffercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
