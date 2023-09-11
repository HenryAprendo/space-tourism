import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemsNavigation } from './navegation-utils';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  itemsNav = itemsNavigation.slice();

  isMenuActive = false;

  toggleIsMenu(){
    this.isMenuActive = !this.isMenuActive;
  }

}
