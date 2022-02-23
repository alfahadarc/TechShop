import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentandreviewComponent } from './commentandreview.component';

describe('CommentandreviewComponent', () => {
  let component: CommentandreviewComponent;
  let fixture: ComponentFixture<CommentandreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentandreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentandreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
