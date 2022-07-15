import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  users:any;
  constructor(private userdata:Service1Service) 
  { 
    this.userdata.getuserdata().subscribe((data)=> {
      this.users=data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
