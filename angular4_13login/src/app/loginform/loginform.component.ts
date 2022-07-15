import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  constructor()
  { 
  }

  ngOnInit()
  { 
  }
  //  Not define type of argument in angular 4 and in agular 12/13 define compalsory type of argument

  loginUser(event:any){                  
    console.log("this is LoginForm");
    event.preventDefault();
    console.log(event);
    var username=event.target.elements[0].value;
    var password=event.target.elements[1].value;
    console.log(username,password);
  }
}
