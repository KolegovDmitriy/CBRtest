import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onInputPlanet: EventEmitter<any> = new EventEmitter<any>()

  PlanetName = '';

  constructor() { }

  ngOnInit(): void {
  }

  InputPlanet(event:any): void{
    this.PlanetName = event.target.value;
    this.onInputPlanet.emit(this.PlanetName)
  }

}
