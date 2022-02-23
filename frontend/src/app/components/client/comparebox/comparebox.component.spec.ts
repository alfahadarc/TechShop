import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareboxComponent } from './comparebox.component';

describe('CompareboxComponent', () => {
  let component: CompareboxComponent;
  let fixture: ComponentFixture<CompareboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
