import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/pages/student-registration/student-registration.component';
import { CourseModuleComponent } from './components/pages/course-module/course-module.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { ExamResultComponent } from './components/pages/exam-result/exam-result.component';
import { ResultInquiryComponent } from './components/pages/result-inquiry/result-inquiry.component';

const routes: Routes = [
  { path: '', redirectTo: '/student-registration', pathMatch: 'full' },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'course-module', component: CourseModuleComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'exam-result', component: ExamResultComponent },
  { path: 'result-inquiry', component: ResultInquiryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }