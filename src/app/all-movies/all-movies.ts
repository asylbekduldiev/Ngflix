import { Component, inject } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { MovieCard } from '../movie-card/movie-card';
import { MovieService} from '../api/movie.service';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {Observable, startWith} from 'rxjs';
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

  movies$ = this.api.getMovies();

  value: Movie | null = null;
  items$!: Observable<Movie[]>;

  search(event: AutoCompleteCompleteEvent) {
    this.items$ = this.api.searchMovies(event.query).pipe(
      startWith([])
    );
  }

  goToMovie(event: AutoCompleteSelectEvent) {
    const movie = event.value as Movie;
    this.router.navigate(['/main/movies', movie.id]);
  }
}
