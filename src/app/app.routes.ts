import { Routes } from '@angular/router';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Home page' ,
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'destination',
    loadComponent: () => import('./pages/destination/destination.component').then(m => m.DestinationComponent),
    data: {
      preload: true
    },
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details',
        component: DestinationDetailsComponent,
      }
    ]
  },
];





