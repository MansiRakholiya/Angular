import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Employeeclass } from './employeeclass';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  url='http://10.37.55.73:8080/springmvc/emp/add';

  public header= new HttpHeaders({
    'Content-Type' : 'application/json',
    //'Accept': '*/*',
    //'Accept-Encoding':'gzip, deflate, br',
    'Access-Control-Allow-Origin':'*'
  });
  constructor(private http:HttpClient) { }


  emps(datas:Employeeclass)
  {
    alert("hiii");
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Methods': 'post',
      'Access-Control-Allow-Origin':'*'
    });
    //console.log(datas);
    //return this.http.post(this.url,datas,{headers:headers});

  } 

  poststudent(emps:Employeeclass[])
  {
    debugger;     
    return this.http.post(this.url,JSON.stringify(emps),{'headers':this.header});
  }
}

// getData(symbol: string): Observable<any> {
//   // Tried adding headers with no luck
//   const headers = new Headers();
//   headers.append('Access-Control-Allow-Headers', 'Content-Type');
//   headers.append('Access-Control-Allow-Methods', 'GET');
//   headers.append('Access-Control-Allow-Origin', '*');