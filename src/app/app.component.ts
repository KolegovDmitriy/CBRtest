import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 
  NamePlanet: string = '';

  constructor() {    
  } 

  ngOnInit() { 
  }
 
  EmitPlanetName(NamePlanet:string){
     this.NamePlanet = NamePlanet;
  }
}
