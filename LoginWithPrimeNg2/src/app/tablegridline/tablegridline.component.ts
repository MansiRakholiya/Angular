import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-tablegridline',
  templateUrl: './tablegridline.component.html',
  styleUrls: ['./tablegridline.component.css']
})
export class TablegridlineComponent implements OnInit {

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
