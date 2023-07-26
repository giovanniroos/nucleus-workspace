import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, firstValueFrom} from 'rxjs'
import {map} from 'rxjs/operators'
import { uuid } from '../../core/utils/uuid';
import { Task } from '../models/task.model';
import {TaskService} from '../services/task.service';

@Injectable({providedIn: 'root'})
export class TaskStoreService {


  constructor(private taskService: TaskService) {
    this.fetchAll()
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject 
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addtask, removetask, etc)
  // - Create one BehaviorSubject per store entity, for example if you have taskGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _tasks = new BehaviorSubject<Task[]>([]);

  // Expose the observable$ part of the _tasks subject (read only stream)
  readonly tasks$: Observable<Task[]> = this._tasks.asObservable();


  // we'll compose the tasks$ observable with map operator to create a stream of only completed tasks
  readonly completedTasks$ = this.tasks$.pipe(
    map(tasks => tasks.filter(task => task.isCompleted))
  )

  readonly uncompletedTasks$ = this.tasks$.pipe(
    map(tasks => tasks.filter(task => !task.isCompleted))
  )

  // the getter will return the last value emitted in _tasks subject
  get tasks(): Task[] {
    return this._tasks.getValue();
  }


  // assigning a value to this.tasks will push it onto the observable 
  // and down to all of its subsribers (ex: this.tasks = [])
  set tasks(val: Task[]) {
    this._tasks.next(val);
  }

  async addTask(title: string) {

    if(title && title.length) {

      // This is called an optimistic update
      // updating the record locally before actually getting a response from the server
      // this way, the interface seems blazing fast to the enduser
      // and we just assume that the server will return success responses anyway most of the time.
      // if server returns an error, we just revert back the changes in the catch statement 

      const tmpId = uuid();
      const tmptask = {id: tmpId, title, isCompleted: false};

      this.tasks = [
        ...this.tasks, 
        tmptask
      ];

      try {
        // const task = await this.taskService
        //   .create({title, isCompleted: false})
        //   .toPromise();

        const task: Task = await firstValueFrom(this.taskService
          .create(tmptask));

        // we swap the local tmp record with the record from the server (id must be updated)
        const index = this.tasks.findIndex((t) => t.id === tmpId);
        if (task && index !== -1) {
          this.tasks[index] = {
            ...task
          };
          this.tasks = [...this.tasks];
        }
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeTask(tmpId, false);
      }
      
    }

  }

  async removeTask(id: string, serverRemove = true) {
    // optimistic update
    const task = this.tasks.find(t => t.id === id);
    this.tasks = this.tasks.filter(task => task.id !== id);
    if (serverRemove) {
      try {
        await firstValueFrom(this.taskService.remove(id));
      } catch (e) {
        console.error(e);
        if (task) {
          this.tasks = [...this.tasks, task];
        }
      }
    }
  }

  async setCompleted(id: string, isCompleted: boolean) {
    let task = this.tasks.find(task => task.id === id);
    if(task) {
      // optimistic update
      const index = this.tasks.indexOf(task);
      this.tasks[index] = {
        ...task,
        isCompleted
      }
      this.tasks = [...this.tasks];
      try {
        await firstValueFrom(this.taskService.setCompleted(id, isCompleted));
      } catch (e) {
        console.error(e);
        this.tasks[index] = {
          ...task,
          isCompleted: !isCompleted
        }
      }
    }
  }


  async fetchAll() {
    const tasks = await firstValueFrom(this.taskService.index());
    if (tasks !== undefined) {
      this.tasks = tasks;
    }
  }


}