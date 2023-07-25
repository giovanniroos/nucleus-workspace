import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';
import { TaskStoreService } from './services/task-store.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [
    TaskService,
    TaskStoreService
  ]
})
export class TasksModule { }
