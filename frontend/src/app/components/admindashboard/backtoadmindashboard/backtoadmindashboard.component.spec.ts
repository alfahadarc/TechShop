import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktoadmindashboardComponent } from './backtoadmindashboard.component';

describe('BacktoadmindashboardComponent', () => {
  let component: BacktoadmindashboardComponent;
  let fixture: ComponentFixture<BacktoadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktoadmindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktoadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
