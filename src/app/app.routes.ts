import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/container/cart.component').then(c => c.CartComponent),
  },
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];
