import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>{{parentdata}}</h1>
  `,
  styles: []
})
export class TestComponent implements OnInit {

   @Input() public parentdata:any;               //version 13 need (any) for datatypes
  constructor() { }

  ngOnInit(): void {
  }

}
