import { Routes } from '@angular/router';
import {MovieCategory} from './movie-category/movie-category';
import {AllMovies} from './all-movies/all-movies';
import {MovieGenres} from './movie-genres/movie-genres';

export const routes: Routes = [
  {path: "main", component: MovieCategory,
   children: [
     {path: "movies", component: AllMovies},
     {path: "genres", component: MovieGenres}
   ]}
];
