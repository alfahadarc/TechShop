import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesCardComponent } from './includes-card.component';

describe('IncludesCardComponent', () => {
  let component: IncludesCardComponent;
  let fixture: ComponentFixture<IncludesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
