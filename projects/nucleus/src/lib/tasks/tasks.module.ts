import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TasksModule { }
