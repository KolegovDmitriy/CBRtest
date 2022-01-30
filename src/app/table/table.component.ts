import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http' // импортирование библиотеки для HttpClient

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

 planets: planet[] = [];

 @Input() NamePlanetAPP !:string;

 constructor(private http: HttpClient) {   
 }

  ngOnChanges(changes: SimpleChanges){
   this.http.get<any>('https://swapi.dev/api/planets?search='+this.NamePlanetAPP)
    .subscribe( response => {
        this.planets = response.results;
    })
  }

}