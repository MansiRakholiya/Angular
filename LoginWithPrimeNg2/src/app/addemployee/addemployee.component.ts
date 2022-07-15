import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeclass } from 'app/employeeclass';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  // emp1: Employeeclass = new Employeeclass;
  emp1 = {} as Employeeclass;
  employees:Employeeclass[] = [];

  constructor(private _route : ActivatedRoute, private _router : Router)
  {
    this.employees.push({'ename':'mansi','city':'ahemdabad','eid':1,'mobileno':9876543210,'salary':523653});
    this.employees.push({'ename':'nirali','city':'rajkot','eid':2,'mobileno':9876543210,'salary':523653});
    this.employees.push({'ename':'riddhi','city':'amreli','eid':3,'mobileno':9876543210,'salary':523653});
    this.employees.push({'ename':'kruti','city':'amrapur ','eid':4,'mobileno':9876543210,'salary':523653});
    this.employees.push({'ename':'niki','city':'vapi','eid':6,'mobileno':9876543210,'salary':523653});
  }
  onSubmit() 
  {
    debugger;
    this.employees.push(this.emp1);
    console.log(this.employees);
  }

  onEdit(index:number)
  {
    this._router.navigate(['/editemployee',index]);
  }
  ngOnInit(): void {
  }

}
