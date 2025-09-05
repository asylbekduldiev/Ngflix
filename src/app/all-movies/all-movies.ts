import {Component, inject} from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';
import {AutoComplete, AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {MovieCard} from '../movie-card/movie-card';
import {MovieService} from '../api/movie.service';
import {AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-movies',
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
  value: string | undefined;

  items: any[] = [];

  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

  private api = inject(MovieService)

  movies$ = this.api.getMovies();


}
