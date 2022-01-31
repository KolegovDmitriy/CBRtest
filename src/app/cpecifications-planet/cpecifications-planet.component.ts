import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter:string;
  climate:string;
  gravity:string;
  terrain:string;
  surface_water:string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}
@Component({
  selector: 'app-cpecifications-planet',
  templateUrl: './cpecifications-planet.component.html',
  styleUrls: ['./cpecifications-planet.component.scss']
})
export class CpecificationsPlanetComponent implements OnChanges {

  planets: planet[] = [];

  @Input() NamePlanet !:string;
 
  constructor(private http: HttpClient) {   
  }
 
   ngOnChanges(changes: SimpleChanges){
    this.http.get<any>('https://swapi.dev/api/planets?search='+this.NamePlanet)
     .subscribe( response => {
         this.planets = response.results;
     })
   }

}
