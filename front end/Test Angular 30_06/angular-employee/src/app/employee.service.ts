import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeURL = 'http://localhost:3000/employees'

  getEmployees(): Observable<any> {
    return this.http.get(this.employeeURL)
  }
  addEmployee(employee:Employee){
    return this.http.post(this.employeeURL,employee)
  }

  constructor(
    private http: HttpClient
  ) {
  }
}