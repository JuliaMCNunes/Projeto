import { TestBed } from '@angular/core/testing';

import { ArmazenaContatosService } from './armazena-contatos.service';

describe('ArmazenaContatosService', () => {
  let service: ArmazenaContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmazenaContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
