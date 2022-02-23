import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedproductcardComponent } from './feturedproductcard.component';

describe('FeturedproductcardComponent', () => {
  let component: FeturedproductcardComponent;
  let fixture: ComponentFixture<FeturedproductcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeturedproductcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeturedproductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
