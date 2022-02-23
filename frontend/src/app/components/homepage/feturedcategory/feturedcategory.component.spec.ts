import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedcategoryComponent } from './feturedcategory.component';

describe('FeturedcategoryComponent', () => {
  let component: FeturedcategoryComponent;
  let fixture: ComponentFixture<FeturedcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeturedcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeturedcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
