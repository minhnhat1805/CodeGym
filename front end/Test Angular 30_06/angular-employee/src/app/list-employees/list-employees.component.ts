import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Observable<Employee>;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.getListEmployees();
  }
  getListEmployees(): void{
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log(this.employees);
    });
  }
  addEmployee(): void {
    this.router.navigate(['add-employee']);
  }

}
