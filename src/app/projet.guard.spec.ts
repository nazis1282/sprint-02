import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { projetGuard } from './projet.guard';

describe('projetGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => projetGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
