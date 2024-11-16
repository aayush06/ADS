// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/task/';  // Django API URL

  constructor(private http: HttpClient) {}

  createTask(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}
