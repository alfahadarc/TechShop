import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverycardComponent } from './deliverycard.component';

describe('DeliverycardComponent', () => {
  let component: DeliverycardComponent;
  let fixture: ComponentFixture<DeliverycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
