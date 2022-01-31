import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-planet',
  templateUrl: './input-planet.component.html',
  styleUrls: ['./input-planet.component.scss']
})
export class InputPlanetComponent implements OnInit {

  @Output() onInputPlanet: EventEmitter<any> = new EventEmitter<any>()

  planetName = '';

  constructor() { }

  ngOnInit(): void {
  }

  InputPlanet(event:any): void{
    this.planetName = event.target.value;
    this.onInputPlanet.emit(this.planetName)
  }

}
