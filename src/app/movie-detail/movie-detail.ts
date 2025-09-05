import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {MovieService} from '../api/movie.service';
import {Observable, switchMap} from 'rxjs';
import {Movie} from '../model/movie.model';

@Component({
  selector: 'app-movie-detail',
  imports: [
    NgOptimizedImage,
    AsyncPipe
  ],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss'
})
export class MovieDetail {
  private route = inject(ActivatedRoute);
  private api = inject(MovieService);

  movie$: Observable<Movie> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.api.getMovieById(id);
    })
  );

}
