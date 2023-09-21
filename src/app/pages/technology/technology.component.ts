import { Component, OnInit, inject } from '@angular/core';
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

  ngOnInit(): void {
    this.dataService.getAllTechnoligies()
      .subscribe(data => {
        this.technologies = data;
      })
  }

}
