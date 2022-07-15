import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';
HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  constructor(private userdata:UserdataService ){
    this.userdata.getUserData().subscribe((data)=>{
      this.users=data;
      console.log(data);
    })
  }
}
