import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router, private auth:AuthService) { }

  onlogout()
  {
    localStorage.removeItem("ACCESS_TOKEN");
    this._router.navigate(['/login']);
  }
  
  ngOnInit(): void {
    debugger;

    let objUser = this.auth.getUser();
    if(objUser != null)
      {
        debugger;
        JSON.parse(objUser).email
      }
    
  }
}
