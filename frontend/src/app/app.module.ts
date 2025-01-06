import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { StudentRegistrationComponent } from './components/pages/student-registration/student-registration.component';
import { CourseModuleComponent } from './components/pages/course-module/course-module.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { ExamResultComponent } from './components/pages/exam-result/exam-result.component';
import { ResultInquiryComponent } from './components/pages/result-inquiry/result-inquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentRegistrationComponent,
    CourseModuleComponent,
    CourseDetailsComponent,
    ExamResultComponent,
    ResultInquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }