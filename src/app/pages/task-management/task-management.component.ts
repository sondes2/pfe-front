import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';
import {Task} from 'protractor/built/taskScheduler';
import {Tasks} from '../../models/tasks';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {
  taskList: Tasks[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.findByUserId();
  }

  findByUserId() {
    const login = window.sessionStorage.getItem('AuthUsername');
    this.taskService.findByUserId(login).subscribe({
      next: (value: Tasks[]) => {
        this.taskList = value;
        console.log(value, this.taskList);
      }, error: err => console.log(err)
    });

  }

  changeStatus(status: string, task: Tasks) {
    task.statustype = status;
    this.taskService.editTask(task).subscribe({next: value => {
      this.findByUserId();
      }, error: err => console.log(err)});
  }
}
