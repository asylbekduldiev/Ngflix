import { Component, inject } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutoComplete, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { MovieCard } from '../movie-card/movie-card';
import { MovieService} from '../api/movie.service';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {debounceTime, distinctUntilChanged, Observable, of, switchMap} from 'rxjs';
import {Movie} from  "../model/movie.model"
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [
    FloatLabel,
    FormsModule,
    AutoComplete,
    MovieCard,
    AsyncPipe,
    RouterLink,
    ReactiveFormsModule,
    PrimeTemplate
  ],
  templateUrl: './all-movies.html',
  styleUrl: './all-movies.scss'
})
export class AllMovies {
  private api = inject(MovieService);
  private router = inject(Router);

  movies$ = this.api.getMovies();

  value: Movie | null = null;
  searchControl = new FormControl<string>('', { nonNullable: true });

  items$: Observable<Movie[]> = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((query: string) => {
      if (!query.trim()) {
        return of([]);
      }
      return this.api.searchMovies(query);
    })
  );

  goToMovie(event: AutoCompleteSelectEvent) {
    const movie: Movie = event.value;
    this.router.navigate(['/main/movies', movie.id]);
  }
}
