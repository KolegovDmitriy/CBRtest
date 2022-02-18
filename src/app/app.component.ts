import { Component, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 
  namePlanet: string='';

  constructor() {    
  } 

  ngOnInit() { 
    const searchBox  = document.getElementsByClassName("inputplanet");  
    const keyup$ = fromEvent(searchBox, 'keyup');  
    keyup$.pipe(
      map((planet: any) => planet.currentTarget.value),     
      debounceTime(1000)
    )
    .subscribe((value) => {  
     this.namePlanet = value;          
    });
  }
 



}
