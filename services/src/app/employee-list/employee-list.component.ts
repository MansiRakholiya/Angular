import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[] as any;           //this is the new featuers in angular 13 any   // employees:string[]=[];
  constructor( private emp:EmployeeService) 
  { 
    console.log("angular framework")
  }

  ngOnInit(): void 
  {
    this.employees= this.emp.getEmployee();
  }

  
}
