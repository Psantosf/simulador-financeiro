import { TestBed } from '@angular/core/testing';

import { PersistDataService } from './persist-data.service';

describe('PersistDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service).toBeTruthy();
  });

  it('Deve verificar o getProponente', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service.getProponente).toBeTruthy();
  });
  it('Deve verificar o getImmobile', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service.getImmobile).toBeTruthy();
  });
  it('Deve verificar o getInstallments', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service.getInstallments).toBeTruthy();
  });
  it('Deve verificar o getAmount', () => {
    const service: PersistDataService = TestBed.get(PersistDataService);
    expect(service.getAmount).toBeTruthy();
  });
});
