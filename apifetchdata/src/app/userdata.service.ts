import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// http is instance of httpclient
export class UserdataService {
  
  constructor(private http : HttpClient ) {        
  }
  getUserData()
  {
    let apiurl = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(apiurl);
  }
}


// return this.http.get(apiurl).subscribe((res)=>{
//   this.data=res;
//   console.log(this.data);