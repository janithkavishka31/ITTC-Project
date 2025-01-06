import { Component } from '@angular/core';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  standalone: false
})
export class CourseDetailsComponent {
  courseData = {
    CD_ID: 0,  
    CourseName: '',
    CourseType: '',
    Duration: '',
    Medium: '',
    CourseLevel: '',
    Active: 1,
    DateEntered: new Date().toISOString().split('T')[0], 
    User: ''
  };

  mediumOptions = ['English', 'Sinhala', 'Tamil'];
  courseLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  courseTypeOptions = ['Full Time', 'Part Time', 'Weekend'];

  onSubmit() {
    console.log('Form submitted:', this.courseData);
  }
}