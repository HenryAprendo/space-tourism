import { Routes } from '@angular/router';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Home' ,
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    title: 'Destinations',
    path: 'destination',
    loadComponent: () => import('./pages/destination/destination.component').then(m => m.DestinationComponent),
    data: {
      preload: true
    },
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DestinationDetailsComponent, }
    ]
  },
  {
    title: 'Crews',
    path: 'crew',
    loadComponent: () => import('./pages/crew/crew.component').then(m => m.CrewComponent),
    data: {
      preload: true
    },
  },
  {
    title: 'Technology',
    path: 'technology',
    loadComponent: () => import('./pages/technology/technology.component').then(m => m.TechnologyComponent),
    data: {
      preload: true
    }
  }

];





