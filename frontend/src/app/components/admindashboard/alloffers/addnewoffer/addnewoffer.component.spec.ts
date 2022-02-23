import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewofferComponent } from './addnewoffer.component';

describe('AddnewofferComponent', () => {
  let component: AddnewofferComponent;
  let fixture: ComponentFixture<AddnewofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
