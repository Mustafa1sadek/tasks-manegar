import { Injectable } from '@angular/core';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  x:  any;

  tasks:Task[] = [
  {
    title:'task 1',
    description:'',
  }
  ];


  constructor() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)

    }
  }

  deleteTask(i:number){
    this.tasks.splice(i,1);
    this.saveAll();

  }

  updateTask( i:number , task:Task){
    this.tasks[i] = task;
    this.saveAll();
  }

  saveTask(title:string , disc:string)
  {
    this.tasks.push({
      title :title ,
      description : disc,
    })
    this.saveAll();

  }

  saveAll(){
    localStorage.setItem('tasks' , JSON.stringify(this.tasks))
  }

}
