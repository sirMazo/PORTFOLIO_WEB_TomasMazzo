import { TestBed } from '@angular/core/testing';

import { ImportScriptService } from './import-script.service';

describe('ImportScriptService', () => {
  let service: ImportScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
