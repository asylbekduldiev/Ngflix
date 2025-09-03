import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieService} from '../api/movie.service';
import {Movie} from '../model/movie.model';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [
    AsyncPipe,
    NgOptimizedImage
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  private api = inject(MovieService)

  movies$ = this.api.getMovies();


}
