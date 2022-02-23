import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedproductComponent } from './feturedproduct.component';

describe('FeturedproductComponent', () => {
  let component: FeturedproductComponent;
  let fixture: ComponentFixture<FeturedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeturedproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeturedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
