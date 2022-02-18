import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

@Component({
  selector: 'app-specifications-planet',
  templateUrl: './specifications-planet.component.html',
  styleUrls: ['./specifications-planet.component.scss']
})

export class SpecificationsPlanetComponent implements OnChanges {

  planets: planet[] = [];

  @Input() namePlanet!: string;
 
  constructor(private http: HttpClient) {   
  }
 
   ngOnChanges(changes: SimpleChanges){
    this.http.get<any>(`https://swapi.dev/api/planets?search=${this.namePlanet}`)
     .subscribe( response => {
         this.planets = response.results;
     })
   }

}
