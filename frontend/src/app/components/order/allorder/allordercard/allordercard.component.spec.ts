import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordercardComponent } from './allordercard.component';

describe('AllordercardComponent', () => {
  let component: AllordercardComponent;
  let fixture: ComponentFixture<AllordercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllordercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllordercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
