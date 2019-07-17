import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  isActive = true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
   }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void{
    console.log(empForm);
  }
}
