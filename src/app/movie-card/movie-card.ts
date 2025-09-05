import {Component, inject, input, signal} from '@angular/core';
import {Movie} from '../model/movie.model';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  movie = input<Movie>()
}
