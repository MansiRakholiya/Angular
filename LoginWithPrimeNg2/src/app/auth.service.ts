import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn()       //if this method is return true when localstorage is not null 
  {
    debugger;
    return localStorage.getItem('ACCESS_TOKEN') !== null; 
  }
  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  public getUser() :any
  {
    debugger;
    return localStorage.getItem("ACCESS_TOKEN");
  }
}
