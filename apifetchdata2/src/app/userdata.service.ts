import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) {

   }

   getUserData()
   {
      let api="https://gorest.co.in/public/v2/comments";
    //  let api="https://10.37.55.73/public/v2/comments";  wrong url
    //let apiurl= "http://10.37.55.73:8080/springmvc/emp/";
    return this.http.get(api);
   }
}

// this is for the cors origin and it set in the server side
// <httpProtocol>  
//     <customHeaders>  
//      <add name="Access-Control-Allow-Origin" value="*" />  
//      <add name="Access-Control-Allow-Headers" value="Content-Type" />  
//      <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" />  
//     </customHeaders>  
//   </httpProtocol>  