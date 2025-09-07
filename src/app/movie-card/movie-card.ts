import {Component, input} from '@angular/core';
import {Movie} from '../model/movie.model';
import { NgOptimizedImage} from '@angular/common';

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
