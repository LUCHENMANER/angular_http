import { TestBed, inject } from '@angular/core/testing';

import { HttpdataService } from './httpdata.service';

describe('HttpdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpdataService]
    });
  });

  it('should be created', inject([HttpdataService], (service: HttpdataService) => {
    expect(service).toBeTruthy();
  }));
});
