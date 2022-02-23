import { TestBed } from '@angular/core/testing';

import { ClientPublicService } from './client-public.service';

describe('ClientPublicService', () => {
  let service: ClientPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
