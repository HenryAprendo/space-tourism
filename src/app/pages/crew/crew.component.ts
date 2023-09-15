import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {

}
