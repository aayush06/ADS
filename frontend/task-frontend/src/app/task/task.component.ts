import { Component } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private taskService: TaskService) {}

  createTask() {
    this.taskService.createTask().subscribe(response => {
      alert(response.message);
    });
  }
}
