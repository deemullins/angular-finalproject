import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 0,
      name: 'Finish Angular course'
    },
    {
      id: 1,
      name: 'Pack for trip'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
