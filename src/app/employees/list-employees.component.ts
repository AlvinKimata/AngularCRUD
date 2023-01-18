import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {
  employees: Employee[] = [
    {
    id: 1,
    name: 'Mark',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 1234567890,
    dateOfBirth: new Date('10/25/1988'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Mark.png'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 2345978640,
    dateOfBirth: new Date('11/20/1979'),
    department: 'HR',
    isActive: true,
    photoPath: 'assets/images/Mary.png'
  }
  ,
  {
    id: 3,
    name: 'John',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 5432978640,
    dateOfBirth: new Date('3/25/1976'),
    department: 'IT',
    isActive: false,
    photoPath: 'assets/images/John.png'
  }
];

constructor() { }
ngOnInit() {  
}
}