import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
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
    ],
  },
];
