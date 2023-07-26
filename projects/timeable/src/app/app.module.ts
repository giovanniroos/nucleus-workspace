import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NucleusModule, TasksModule,  CoreModule } from 'nucleus'
import { TaskListModule } from './tasks/task-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NucleusModule,
    TasksModule,
    CoreModule,
    TaskListModule
  ],
  exports: [
    
  ],
  providers: [
    // TaskStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
