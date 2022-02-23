import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmblrequestComponent } from './asmblrequest.component';

describe('AsmblrequestComponent', () => {
  let component: AsmblrequestComponent;
  let fixture: ComponentFixture<AsmblrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmblrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmblrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
