import { TestBed, async, inject } from '@angular/core/testing';

import { MusicResolverGuard } from './music-resolver.guard';

describe('MusicResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicResolverGuard]
    });
  });

  it('should ...', inject([MusicResolverGuard], (guard: MusicResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
