import { TestBed } from '@angular/core/testing';

import { ServAulaService } from './serv-aula.service';

describe('ServAulaService', () => {
  let service: ServAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
