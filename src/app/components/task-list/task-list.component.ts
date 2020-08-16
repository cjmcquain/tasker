import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {

   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
      console.log(this.tasks);
    })
  }

}
