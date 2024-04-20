import { Component, signal, viewChildren } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  routes = [
    { path: 'home', name: 'Home' },
    { path: 'cart', name: 'Carrinho de compras' },
    { path: 'todo', name: 'Todo list' },
    { path: 'defer', name: 'Defer' },
  ];
  expanded = signal(false);

  constructor() {
    viewChildren('')
  }

}
