import { Component, OnInit } from '@angular/core';
// import { Employee } from './employee';
import { Employeeclass } from '../employeeclass';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    // formemployees[]
    
  //   employees:Employeeclass[] =[
  //   new Employeeclass(1,"mansi",10000),
  //   new Employeeclass(1,"mansi",10000),
  //   new Employeeclass(1,"mansi",10000)
  // ];
  // emp:Employee;
  constructor() { }

  ngOnInit(): void 
  {
    // this.emp=new Employee(101,"mansi",10000)
  }

}
