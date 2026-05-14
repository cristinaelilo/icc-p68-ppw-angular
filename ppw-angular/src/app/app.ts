import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/header';
import { AppHeroComponent } from './components/app-hero/hero';
import { AppFooterComponent } from './components/app-footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppHeroComponent,
    AppFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular';
}