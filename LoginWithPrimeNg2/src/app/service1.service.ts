import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  // public apiurl= "http://10.37.55.73:8080/springmvc/emp/add";
  // public header= new HttpHeaders({
  //   'Content-Type' : 'application/json',
  //   //'Accept': '*/*',
  //   //'Accept-Encoding':'gzip, deflate, br',
  //   'Access-Control-Allow-Origin':'*'
  // });
  constructor(private http:HttpClient) 
  {   
  } 
  getuserdata(){
    let url= "assets/userlist.json";
    return this.http.get(url);
  }
  getapidata(){
    let apiurl= "https://jsonplaceholder.typicode.com/users";
    return this.http.get(apiurl);
  }
}
