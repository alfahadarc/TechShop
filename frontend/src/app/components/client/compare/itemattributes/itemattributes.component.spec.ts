import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemattributesComponent } from './itemattributes.component';

describe('ItemattributesComponent', () => {
  let component: ItemattributesComponent;
  let fixture: ComponentFixture<ItemattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemattributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
