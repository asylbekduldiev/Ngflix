import { Component } from '@angular/core';
import {NavPanel} from '../nav-panel/nav-panel';
import {RouterOutlet} from '@angular/router';
import {DefHeader} from '../def-header/def-header';

@Component({
  selector: 'app-movie-category',
  imports: [
    NavPanel,
    RouterOutlet,
    DefHeader
  ],
  templateUrl: './movie-category.html',
  styleUrl: './movie-category.scss'
})
export class MovieCategory {

}
