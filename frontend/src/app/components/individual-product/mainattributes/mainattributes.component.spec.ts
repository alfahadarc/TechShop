import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainattributesComponent } from './mainattributes.component';

describe('MainattributesComponent', () => {
  let component: MainattributesComponent;
  let fixture: ComponentFixture<MainattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
