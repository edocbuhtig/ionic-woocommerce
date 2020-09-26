import { TestBed } from '@angular/core/testing';

import { WpwooService } from './wpwoo.service';

describe('WpwooService', () => {
  let service: WpwooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpwooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
