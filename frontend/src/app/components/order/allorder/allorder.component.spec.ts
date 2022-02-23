import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderComponent } from './allorder.component';

describe('AllorderComponent', () => {
  let component: AllorderComponent;
  let fixture: ComponentFixture<AllorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
