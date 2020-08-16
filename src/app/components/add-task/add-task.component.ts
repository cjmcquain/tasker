import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService) {
    this.task = {
      name: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.taskService.createTask(this.task)
    .then(res => {
      if (res) {
        console.log('Submitted Task Name: ' + this.task.name);
        this.task = {
          name: ''
        }
        location.replace('/task-list');
      }
    });


  }

}
