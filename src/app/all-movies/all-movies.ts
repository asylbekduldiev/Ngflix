import { Component } from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';
import {AutoComplete, AutoCompleteCompleteEvent} from 'primeng/autocomplete';

@Component({
  selector: 'app-all-movies',
  imports: [
    FloatLabel,
    FormsModule,
    AutoComplete
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
}
