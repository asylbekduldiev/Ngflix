import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonDirective, ButtonIcon} from 'primeng/button';

@Component({
  selector: 'app-nav-panel',
  imports: [
    RouterLink,
    ButtonDirective,
    ButtonIcon
  ],
  templateUrl: './nav-panel.html',
  styleUrl: './nav-panel.scss'
})
export class NavPanel {

}
