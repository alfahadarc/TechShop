import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherattributesComponent } from './otherattributes.component';

describe('OtherattributesComponent', () => {
  let component: OtherattributesComponent;
  let fixture: ComponentFixture<OtherattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
