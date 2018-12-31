import { TestBed } from '@angular/core/testing';

import { NgWordpressService } from './ng-wordpress.service';

describe('NgWordpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgWordpressService = TestBed.get(NgWordpressService);
    expect(service).toBeTruthy();
  });
});
