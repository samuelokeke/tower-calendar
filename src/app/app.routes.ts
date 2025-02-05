import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

  {
    path: 'calendar',
    loadComponent: async () =>
      (await import('./components/calendar/calendar.component'))
        .CalendarComponent,
  },

  {
    path: 'cart-drop',
    loadComponent: async () =>
      (await import('./components/cart-drop/cart-drop.component'))
        .CartDropComponent,
  },
];
