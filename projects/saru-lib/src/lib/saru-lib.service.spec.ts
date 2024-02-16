import { TestBed } from '@angular/core/testing';

import { SaruLibService } from './saru-lib.service';

describe('SaruLibService', () => {
  let service: SaruLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaruLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
