import { TestBed } from '@angular/core/testing';

import { CoserviceService } from './coservice.service';

describe('CoserviceService', () => {
  let service: CoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
