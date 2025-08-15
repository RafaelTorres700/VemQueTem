import { TestBed } from '@angular/core/testing';

import { CurtidasService } from './curtidas.service';

describe('CurtidasService', () => {
  let service: CurtidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurtidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
