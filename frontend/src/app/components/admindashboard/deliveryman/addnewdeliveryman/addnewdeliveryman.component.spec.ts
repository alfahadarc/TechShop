import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewdeliverymanComponent } from './addnewdeliveryman.component';

describe('AddnewdeliverymanComponent', () => {
  let component: AddnewdeliverymanComponent;
  let fixture: ComponentFixture<AddnewdeliverymanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewdeliverymanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewdeliverymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
