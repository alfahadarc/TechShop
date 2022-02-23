import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffercardComponent } from './offercard.component';

describe('OffercardComponent', () => {
  let component: OffercardComponent;
  let fixture: ComponentFixture<OffercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
