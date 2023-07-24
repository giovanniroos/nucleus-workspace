import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
  private readonly apiBaseUrl = 'https://5c6716e624e2140014f9ee66.mockapi.io/tasks';

  constructor(private http: HttpClient) { }


  index() {
    return this.http.get<Task[]>(`${this.apiBaseUrl}/tasks`);
  }


  create(task: Task) {
    return this.http.post<Task>(`${this.apiBaseUrl}/tasks`, task);
  }


  remove(id: string) {
    return this.http.delete(`${this.apiBaseUrl}/tasks/${id}`);
  }

  setCompleted(id: string, isCompleted: boolean) {
    return this.http.put<Task>(`${this.apiBaseUrl}/tasks/${id}`, {isCompleted});
  }

}