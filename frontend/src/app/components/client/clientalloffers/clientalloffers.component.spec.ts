import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientalloffersComponent } from './clientalloffers.component';

describe('ClientalloffersComponent', () => {
  let component: ClientalloffersComponent;
  let fixture: ComponentFixture<ClientalloffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientalloffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientalloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
