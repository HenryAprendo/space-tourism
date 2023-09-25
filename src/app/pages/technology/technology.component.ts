import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  private dataService = inject(DataService);

  technologies:Technology[] = [];

  tech:WritableSignal<Technology|undefined> = signal(undefined);

  positionActual = 0;

  ngOnInit(): void {
    this.dataService.getAllTechnoligies()
      .subscribe(data => {
        this.technologies = data;
        this.tech.set(this.technologies[0]);
      })
  }

  changeTech(index:number){
    const tech = this.technologies[index];
    this.tech.set(tech);
    this.positionActual = index;
  }

}







