import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()

  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  SearchPlanet(){
    if(this.text.trim()){
      text: this.text;
      console.log('');
      this.onSearch.emit(this.text);
    } else {
         alert("Введите символы кроме пробелов")
         this.text = '';
    }

   


  }

}
