import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder} from '@angular/forms';
import { EmployeeService } from '../employee.service'
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private employeeService : EmployeeService,private router:Router) { }
  submitted = false;
  addForm :FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[],
      name: [''],
      email:[],
      birthday:[],
      gender:[''],
      address : [''],
      pinCode: [''],
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.addForm.valid){
      this.employeeService.addEmployee(this.addForm.value).subscribe(data =>{
        console.log(data);
        this.router.navigate(['']);
      })
    }
  }
}
