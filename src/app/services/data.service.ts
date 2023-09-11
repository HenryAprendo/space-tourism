import { Injectable } from '@angular/core';
import { destinations } from '../data/destinations';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  destinationList = destinations.slice();

  constructor() { }

  getAllDestinations() {
    return of(this.destinationList);
  }

  getOneDestinationByName(name:string){
    const data = this.destinationList.find(des => des.name === name);
    return of(data);
  }

}
