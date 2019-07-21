import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Models/Employee.Model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [

        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/1.jpg'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/2.JPG'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: 'IT',
            isActive: false,
            photoPath: 'assets/images/3.JPG'
        },
    ];

    getEmployees() :  Employee[] {
    return this.listEmployees;
    }

    addEmployee(employee: Employee) {
        this.listEmployees.push(employee);
    }
}