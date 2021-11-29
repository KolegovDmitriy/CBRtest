import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() Planet!: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
