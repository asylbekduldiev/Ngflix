import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieCard} from './movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('movie-card');
}
