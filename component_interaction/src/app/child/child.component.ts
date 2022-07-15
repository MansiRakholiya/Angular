import { Component, OnInit,Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.Component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:String;

  constructor() { }

  ngOnInit(): void {
  }


}
