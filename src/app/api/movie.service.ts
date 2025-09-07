import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Movie} from '../model/movie.model';

@Injectable({providedIn: "root"})
export class MovieService{
  private api = 'http://localhost:3000/movies';
  http = inject(HttpClient)

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.api)
  }

  getMovieById(id: number | null): Observable<Movie>{
    return  this.http.get<Movie>(`${this.api}/${id}`)
  }

  searchMovies(query: string) {
    const q = encodeURIComponent(query.trim());
    return this.http.get<Movie[]>(`${this.api}?title_like=${q}`);
  }
}
