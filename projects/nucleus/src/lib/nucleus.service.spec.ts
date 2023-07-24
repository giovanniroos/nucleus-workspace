import { TestBed } from '@angular/core/testing';

import { NucleusService } from './nucleus.service';

describe('NucleusService', () => {
  let service: NucleusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NucleusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
