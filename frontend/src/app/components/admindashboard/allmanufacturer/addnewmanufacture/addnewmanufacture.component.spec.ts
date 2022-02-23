import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmanufactureComponent } from './addnewmanufacture.component';

describe('AddnewmanufactureComponent', () => {
  let component: AddnewmanufactureComponent;
  let fixture: ComponentFixture<AddnewmanufactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewmanufactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmanufactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
