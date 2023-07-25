import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Task} from '../../models/task.model';
@Component({
  selector: 'lib-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {

  @Input() task?: Task;
  @Output() complete = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }



}
