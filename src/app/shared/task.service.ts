import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) {

   }

   getTasks() {
     return this.firestore.collection("tasks").snapshotChanges();
   }

   createTask(task: Task) {
    return this.firestore.collection('tasks').add(task);
   }
}
