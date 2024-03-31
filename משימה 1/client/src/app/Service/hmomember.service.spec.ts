import { TestBed } from '@angular/core/testing';

import { HMOmemberService } from './hmomember.service';

describe('HMOmemberService', () => {
  let service: HMOmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HMOmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
