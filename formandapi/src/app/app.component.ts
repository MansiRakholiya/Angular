import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employeeclass } from './employeeclass';
import { PostdataService } from './postdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post api call';
  // emp1: Employeeclass = new Employeeclass;
  emp1 = {} as Employeeclass;
  url='http://10.37.55.73:8080/springmvc/emp/add';
  employees:Employeeclass[] = [];

  constructor(public http:HttpClient,public test:PostdataService)
  {
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
    this.employees.push({'ename':'test','city':'test','eid':1,'mobileno':56,'salary':523653});
  }
   public header= new HttpHeaders({
    'Content-Type' : 'application/json',
    //'Accept': '*/*',
    //'Accept-Encoding':'gzip, deflate, br',
    'Access-Control-Allow-Origin':'*'
  });
  onSubmit() 
  {
    // const header= { 'Access-Control-Allow-Origin':'*'}
    debugger;
    alert("form alert");  
    this.employees.push(this.emp1);
    console.log(this.employees);

    this.test.poststudent(this.employees).subscribe((data)=>{
        debugger;
      alert('hi');
      console.log(data);
    });

  }
}
