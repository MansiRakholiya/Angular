import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getStudent()
  {
    return [
      {"id":1,"name":"mansi","age":23,"address":"ahemdabad","mo":1234567891,"email":"mansirakholiya23@gmail.com","dob":"14-8-1999"},
      {"id":2,"name":"kruti","age":23,"address":"rajkot","mo":9876567891,"email":"krutipadaliya7@gmail.com","dob":"6-9-1999"},
      {"id":3,"name":"nikita","age":20,"address":"amreli","mo":6589741230,"email":"nikitadhanani5@gmail.com","dob":"24-9-1999"},
      {"id":4,"name":"riddhi","age":24,"address":"surat","mo":9856311741,"email":"riddhi123@gmail.com","dob":"2-8-1999"}
    ]; 
  }
  getEmployee()
  {
    return[
      {"empid":101,"empname":"mansi","empage":23,"empaddress":"ahemdabad","empsal":16000,"empdep":"Asp.net development"},
      {"empid":102,"empname":"nirali","empage":21,"empaddress":"surat","empsal":25000,"empdep":"python development"},
      {"empid":103,"empname":"darshita","empage":25,"empaddress":"vapi","empsal":20000,"empdep":"android development"},
      {"empid":104,"empname":"gopi","empage":24,"empaddress":"valsad","empsal":12000,"empdep":"java development"},
    ];
  }
}
