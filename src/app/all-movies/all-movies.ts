import { Component, inject } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { MovieCard } from '../movie-card/movie-card';
import { MovieService} from '../api/movie.service';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {debounceTime, distinctUntilChanged, Observable, of, startWith, Subject, switchMap} from 'rxjs';
import {Movie} from  "../model/movie.model"

@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [
    FloatLabel,
    FormsModule,
    AutoComplete,
    MovieCard,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './all-movies.html',
  styleUrl: './all-movies.scss'
})
export class AllMovies {
  private api = inject(MovieService);
  private router = inject(Router);
  private searchTerm$ = new Subject<string>();

  movies$ = this.api.getMovies();

  value: Movie | null = null;
  items$!: Observable<Movie[]>;

  ngOnInit() {
    this.items$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.api.searchMovies(query))
    );
  }

  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.trim();
    this.searchTerm$.next(query);
  }

  goToMovie(event: AutoCompleteSelectEvent) {
    const movie: Movie = event.value;
    this.router.navigate(['/main/movies', movie.id]);
  }
}
