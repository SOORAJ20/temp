import { TestBed } from '@angular/core/testing';

import { RstoService } from './rsto.service';

describe('RstoService', () => {
  let service: RstoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RstoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
