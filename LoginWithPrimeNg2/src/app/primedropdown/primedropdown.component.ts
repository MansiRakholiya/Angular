import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { Service1Service } from 'app/service1.service';

@Component({
  selector: 'app-primedropdown',
  templateUrl: './primedropdown.component.html',
  styleUrls: ['./primedropdown.component.css']
})
export class PrimedropdownComponent implements OnInit {

  users:any;
  selecteduser ='';
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
