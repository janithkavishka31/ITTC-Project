import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css',],
  standalone: false
})
export class StudentRegistrationComponent {
  
  studentData = {
    StudentId: 0,
    CourseYear: new Date().getFullYear(),
    CourseId: 0,
    FullName: '',
    NameWithInitials: '',
    NIC: '',
    MISNumber: '',
    Mobile: '',
    Address: '',
    Gender: '',
    Deleted: 0,
    Changed: 0,
    User: '',
    DateEntered: new Date().toISOString().split('T')[0],
    Dropout: 0,
    FinalExamSitted: 0,
    RepeatStudent: 0
  };

  constructor(private studentService: StudentService) {}

  onSubmit() {
    console.log('Submitting student data:', this.studentData);
    this.studentService.registerStudent(this.studentData).subscribe({
      next: (response) => {
        console.log('Student registered successfully', response);
        this.resetForm();
        alert('Student registered successfully!');
      },
      error: (error) => {
        console.error('Error registering student:', error);
        alert('Error registering student. Please try again.');
      }
    });
  }

  resetForm() {
    this.studentData = {
      StudentId: 0,
      CourseYear: new Date().getFullYear(),
      CourseId: 0,
      FullName: '',
      NameWithInitials: '',
      NIC: '',
      MISNumber: '',
      Mobile: '',
      Address: '',
      Gender: '',
      Deleted: 0,
      Changed: 0,
      User: '',
      DateEntered: new Date().toISOString().split('T')[0],
      Dropout: 0,
      FinalExamSitted: 0,
      RepeatStudent: 0
    };
  }

  
  genderOptions = ['Male', 'Female', 'Other'];
}