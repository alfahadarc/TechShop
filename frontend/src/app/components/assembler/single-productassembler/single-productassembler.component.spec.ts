import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductassemblerComponent } from './single-productassembler.component';

describe('SingleProductassemblerComponent', () => {
  let component: SingleProductassemblerComponent;
  let fixture: ComponentFixture<SingleProductassemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductassemblerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductassemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
