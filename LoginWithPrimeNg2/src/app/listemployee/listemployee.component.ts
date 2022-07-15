import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'app/service1.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  users:any;
  constructor(private userdata:Service1Service) 
  { 
    this.userdata.getapidata().subscribe((data)=> {
      this.users=data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    
  }

}
