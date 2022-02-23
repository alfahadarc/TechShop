import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialvideoComponent } from './tutorialvideo.component';

describe('TutorialvideoComponent', () => {
  let component: TutorialvideoComponent;
  let fixture: ComponentFixture<TutorialvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
