import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblerComponent } from './assembler.component';

describe('AssemblerComponent', () => {
  let component: AssemblerComponent;
  let fixture: ComponentFixture<AssemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
