import { TestBed } from '@angular/core/testing';

import { InicioSessionService } from './inicio-session.service';

describe('InicioSessionService', () => {
  let service: InicioSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
