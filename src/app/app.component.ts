import { Component, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 
  NamePlanet: string = '';

  sub:Subscription | undefined ;

  constructor() {    
  } 

  ngOnInit() { 
    const searchBox  = document.getElementsByClassName(" inputplanet ");  
    const keyup$ = fromEvent(searchBox, 'keyup')  
    this.sub = keyup$.pipe(
      map((inputplanet: any) => inputplanet.currentTarget.value),
      debounceTime(1000)
    )
    .subscribe((value) => {  
      this.NamePlanet = value;          
    });
  }
 
}
