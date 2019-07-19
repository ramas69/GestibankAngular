import { TestBed } from '@angular/core/testing';

import { ClientpotentielService } from './clientpotentiel.service';

describe('ClientpotentielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientpotentielService = TestBed.get(ClientpotentielService);
    expect(service).toBeTruthy();
  });
});
