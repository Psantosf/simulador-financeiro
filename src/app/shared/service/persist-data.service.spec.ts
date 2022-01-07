import { TestBed } from '@angular/core/testing';

import { PersistDataService } from './persist-data.service';

describe('PersistDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service).toBeTruthy();
  });
});
