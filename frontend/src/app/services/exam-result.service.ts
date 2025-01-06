import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamResultService {
  private apiUrl = 'http://localhost:3000/examResults';

  constructor(private http: HttpClient) { }

  
  createExamResult(examData: any): Observable<any> {
    return this.http.post(this.apiUrl, examData);
  }

  
  getAllExamResults(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
  getExamResultsByStudent(studentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/${studentId}`);
  }

  
  updateExamResult(studentId: number, moduleCode: string, examData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${studentId}/${moduleCode}`, examData);
  }

  deleteExamResult(studentId: number, moduleCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${studentId}/${moduleCode}`);
  }
}