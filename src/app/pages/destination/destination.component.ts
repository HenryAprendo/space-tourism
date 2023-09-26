import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs';

type Links = string[];

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet],
  templateUrl: './destination.component.html',
})
export class DestinationComponent implements OnInit {

  dataService = inject(DataService);

  links: Links = [];

  activeRoute = true;

  nameRoute = 'Moon';

  ngOnInit(): void {
    this.dataService.getAllDestinations()
      .pipe(
        map(data => data.map(item => item.name))
      )
      .subscribe(links => {
        this.links = links;
      });
  }

  detectedActiveRoute(nameRoute:string){
    this.nameRoute = nameRoute;
  }

}

















