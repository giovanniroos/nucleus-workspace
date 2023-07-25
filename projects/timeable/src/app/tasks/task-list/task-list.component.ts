import { Component, ElementRef, ViewChild } from '@angular/core';
import { Task } from 'projects/nucleus/src/lib/tasks/models/task.model';
import { TaskStoreService } from 'projects/nucleus/src/public-api';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @ViewChild('taskTitleInput') taskTitleInput!: ElementRef;

  // optimization, rerenders only todos that change instead of the entire list of todos
  // taskTrackFn = (i: string, task: Task) => task.id;

  constructor(public taskStore: TaskStoreService) {}

  onAddTask(title: string) {
    this.taskStore.addTask(title);
    this.taskTitleInput.nativeElement.value = '';
  }

  completeTask(task: Task, isCompleted: boolean){
    console.log(JSON.stringify(task));
    if(task && task.id){
      this.taskStore.setCompleted(task.id, isCompleted);
    }
  }
}

