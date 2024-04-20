import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/container/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/container/cart.component').then(c => c.CartComponent),
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/container/todo.component').then(c => c.TodoComponent),
  },
  {
    path: 'defer',
    loadComponent: () => import('./pages/defer/container/defer.component').then(c => c.DeferComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
