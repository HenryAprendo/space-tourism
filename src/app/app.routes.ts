import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'destination',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'destination',
    component: DestinationComponent,
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





