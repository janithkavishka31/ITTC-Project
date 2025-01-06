import { Component, OnInit } from '@angular/core';
import { ExamResultService } from '../../../services/exam-result.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css'],
  standalone: false
})
export class ExamResultComponent implements OnInit {
  
  examData = {
    StudentId: 0,
    CourseYear: new Date().getFullYear(),
    ModuleCode: '',
    Marks: 0,
    DateEntered: new Date().toISOString().split('T')[0],
    User: 'admin'  
  };


  message: string = '';
  error: string = '';

  
  moduleCodes = [
    'NVQM001',
    'NVQM002',
    'NVQM003',
    'CGP0027'
  ];

  constructor(private examResultService: ExamResultService) {}

  ngOnInit() {
  
  }


  onSubmit() {
    if (this.isValidMarks()) {
      this.examResultService.createExamResult(this.examData)
        .subscribe(
          (response) => {
            this.message = 'Exam result saved successfully!';
            this.resetForm();
          },
          (error) => {
            this.error = 'Error saving exam result: ' + error.message;
            console.error('Error:', error);
          }
        );
    } else {
      this.error = 'Please enter valid marks between 0 and 100';
    }
  }

  isValidMarks(): boolean {
    return this.examData.Marks >= 0 && this.examData.Marks <= 100;
  }

 
  resetForm() {
    this.examData = {
      StudentId: 0,
      CourseYear: new Date().getFullYear(),
      ModuleCode: '',
      Marks: 0,
      DateEntered: new Date().toISOString().split('T')[0],
      User: 'admin'  
    };
    setTimeout(() => this.message = '', 3000); 
  }
}