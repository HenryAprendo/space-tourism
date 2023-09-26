import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { ViewContainerComponent } from '../../components/view-container/view-container.component';
import { DataService } from '../../services/data.service';
import { Crew } from '../../models/crew.model';
import { TemplateRefDirective } from '../../directives/template-ref.directive';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ViewContainerComponent, TemplateRefDirective],
  templateUrl: './crew.component.html',
})
export class CrewComponent implements OnInit {

  private dataService = inject(DataService);

  crews: Crew[] = [];

  ngOnInit(): void {
    this.dataService.getAllCrews()
      .subscribe(data => {
        this.crews = data;
      })
  }

}
