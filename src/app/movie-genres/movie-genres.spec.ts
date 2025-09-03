import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenres } from './movie-genres';

describe('MovieGenres', () => {
  let component: MovieGenres;
  let fixture: ComponentFixture<MovieGenres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieGenres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGenres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
