import { TestBed } from '@angular/core/testing';

import { EditserviceService } from './editservice.service';

describe('EditserviceService', () => {
  let service: EditserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
