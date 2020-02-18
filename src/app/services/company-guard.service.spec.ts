import { TestBed } from '@angular/core/testing';

import { CompanyGuardService } from './company-guard.service';

describe('CompanyGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyGuardService = TestBed.get(CompanyGuardService);
    expect(service).toBeTruthy();
  });
});
