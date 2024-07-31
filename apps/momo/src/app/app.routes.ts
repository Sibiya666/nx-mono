import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ola',
    loadComponent: () => import('@momo/ola').then((m) => m.OlaComponent),
  },
  {
    path: 'triggers',
    loadComponent: () => import('@momo/triggers').then((m) => m.TriggersComponent),
  },
  {
    path: 'ssp',
    loadComponent: () => import('@momo/ssp').then((m) => m.SspComponent),
  },
];
