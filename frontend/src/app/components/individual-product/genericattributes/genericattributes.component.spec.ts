import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericattributesComponent } from './genericattributes.component';

describe('GenericattributesComponent', () => {
  let component: GenericattributesComponent;
  let fixture: ComponentFixture<GenericattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
