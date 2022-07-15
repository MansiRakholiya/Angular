import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public students=[] as any;
  constructor(private emp:EmployeeService) 
  {
   
  }

  ngOnInit(): void 
  {
    this.students=this.emp.getStudent();
  } 

  

}
