import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apifetchdata';
  users:any;
  // The subscriber function defines how to obtain or generate values or messages to be published.
  constructor(private userdata : UserdataService){
    this.userdata.getUserData().subscribe((data)=>{

      this.users=data;
      console.log(data);
    })
    //this.users=null;
	
   


  } 

 
}
