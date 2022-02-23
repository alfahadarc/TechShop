import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktohomeComponent } from './backtohome.component';

describe('BacktohomeComponent', () => {
  let component: BacktohomeComponent;
  let fixture: ComponentFixture<BacktohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
