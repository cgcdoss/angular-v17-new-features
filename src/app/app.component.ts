import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal, viewChildren } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public router = inject(Router);

  routes = [
    { path: '/home', name: 'Home' },
    { path: '/cart', name: 'Carrinho de compras' },
    { path: '/todo', name: 'Todo list' },
    { path: '/defer', name: 'Defer' },
  ];
  expanded = signal(false);

  constructor() {
    viewChildren('')
  }

}
