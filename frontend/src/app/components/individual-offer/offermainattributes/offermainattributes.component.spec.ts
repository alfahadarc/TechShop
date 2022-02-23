import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffermainattributesComponent } from './offermainattributes.component';

describe('OffermainattributesComponent', () => {
  let component: OffermainattributesComponent;
  let fixture: ComponentFixture<OffermainattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffermainattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffermainattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
