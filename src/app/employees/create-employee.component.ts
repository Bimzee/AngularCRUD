import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
import { EmployeeService } from './Services/employee.service';
import { Employee } from '../Models/Employee.Model';
import { Department } from '../Models/Department';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  isActive = true;
  previePhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "Admin" },


  ]
  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
  }
  togglePhotoPreview() {
    this.previePhoto = !this.previePhoto;
  }
  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    this._employeeService.addEmployee(this.employee);
    this._router.navigate(['list']);
    console.log(empForm);
  }
}
