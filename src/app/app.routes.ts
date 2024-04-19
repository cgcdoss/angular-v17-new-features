import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/container/cart.component').then(c => c.CartComponent),
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/container/todo.component').then(c => c.TodoComponent),
  },
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];
