import { TestBed } from '@angular/core/testing';

import { ComicService } from './comic.service';

describe('ListService', () => {
  let service: ComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
