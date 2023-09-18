import { Injectable } from '@angular/core';
import { destinations } from '../data/destinations';
import { crew } from '../data/crew';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private destinationList = destinations.slice();

  private crews = crew.slice();

  constructor() { }

  getAllDestinations() {
    return of(this.destinationList);
  }

  getOneDestinationByName(name:string){
    const data = this.destinationList.find(des => des.name === name);
    return of(data);
  }

  getAllCrews(){
    return of(this.crews);
  }

  getOneCrewByName(name:string){
    const data = this.crews.find(crew => crew.name === name);
    return of(data);
  }

}








