import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedcardComponent } from './failedcard.component';

describe('FailedcardComponent', () => {
  let component: FailedcardComponent;
  let fixture: ComponentFixture<FailedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
