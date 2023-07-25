import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksModule } from 'nucleus';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
