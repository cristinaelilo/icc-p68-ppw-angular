import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,   // 👈 IMPORTANTE
  imports: [RouterOutlet],  // 👈 ESTO ACTIVA EL ROUTER
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}