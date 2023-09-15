import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Destination } from '../../models/destinations.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-details.component.html',
  styles: [
  ]
})
export class DestinationDetailsComponent implements OnInit {

  router = inject(Router);

  route = inject(ActivatedRoute);

  dataService = inject(DataService);

  detail!:Destination;

  defaultName = 'Moon';

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap( param => {
        const name = param.get('name');
        return name ? this.dataService.getOneDestinationByName(name)
                    : this.dataService.getOneDestinationByName(this.defaultName);
      })
    )
    .subscribe(data => {
      if(data){
        this.detail = data;
      }
    })
  }

}















