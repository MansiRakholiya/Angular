import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'app/auth.service';
import { User } from 'app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
    filterstring:any = '';
    userInfo: User[] = [
    {
      email:'darshita@gmail.com',
      password:'admin@test'
    },
    {
      email:'nirali@gmail.com',
      password:'admin@test2'
    },
    {
      email:'nikita@gmail.com',
      password:'admin@test3'
    },
    {
      email:'bhavisha@gmail.com',
      password:'bhavi12345'
    },
    {
      email:'payal@gmail.com',
      password:'payal12324'
    },
    {
      email:'riddhi@gmail.com',
      password:'riddhi123'
    }
  ];
  
  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  get email()
  {
    return this.loginform.get('email')
  }
  get pass()
  {
    return this.loginform.get('password')
  }
  constructor(private _router:Router )
  {
  }
  onLogin()
  {
    console.log(this.loginform);
    
    for(let data of this.userInfo)
    {
      if(this.loginform.controls['email'].value == data.email&&  
        this.loginform.controls['password'].value == data.password)
      {
        debugger;
        localStorage.setItem("ACCESS_TOKEN",JSON.stringify(this.loginform.controls['email'].value));
        this._router.navigate(['/dashboard']);

        // const getmail = this.loginform.controls['email'].value
        // console.log(getmail);
      }
    }
    alert("invalid user");

    // if(this.loginform.controls['email'].value==this.userInfo[0].email && 
    // this.loginform.controls['password'].value==this.userInfo[0].password)
    // {
    //   this._router.navigate(['/dashboard'])
    // }
    // else
    // {
    //   alert('invalid user')
    // }
    // console.log(this.loginform.controls['email'].value);
    // console.log(this.loginform.controls['password'].value);
  }

  ngOnInit(): void 
  {
  }
}
