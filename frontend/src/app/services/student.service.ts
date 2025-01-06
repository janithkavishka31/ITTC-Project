
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STUDENT_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(STUDENT_URL);
  }

  registerStudent(studentData: any): Observable<any> {
    return this.http.post(STUDENT_URL, studentData);
  }

  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put(`${STUDENT_URL}/${id}`, studentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${STUDENT_URL}/${id}`);
  }
}

