import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private baseUrl = 'http://localhost:3000/modules';

  constructor(private http: HttpClient) { }

  getAllModules(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createModule(moduleData: any): Observable<any> {
    return this.http.post(this.baseUrl, moduleData);
  }

  updateModule(id: number, moduleData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, moduleData);
  }

  deleteModule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}