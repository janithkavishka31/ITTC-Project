import { Component } from '@angular/core';
import { ModuleService } from '../../../services/module.service';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
  standalone: false
})
export class CourseModuleComponent {
  moduleData = {
    moduleid: 0,
    modulename: '',
    modulecode: '',
    active: 1,
    createdby: '',
    dateentered: new Date().toISOString().split('T')[0]
  };

  constructor(private moduleService: ModuleService) {}

  onSubmit() {
    console.log('Creating module:', this.moduleData);
    this.moduleService.createModule(this.moduleData).subscribe({
      next: (response) => {
        console.log('Module created successfully:', response);
        this.resetForm();
        alert('Module created successfully!');
      },
      error: (error) => {
        console.error('Error creating module:', error);
        alert('Error creating module. Please try again.');
      }
    });
  }

  resetForm() {
    this.moduleData = {
      moduleid: 0,
      modulename: '',
      modulecode: '',
      active: 1,
      createdby: '',
      dateentered: new Date().toISOString().split('T')[0]
    };
  }
}