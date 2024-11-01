import { Component,  NgModule,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import {  FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  id:any ;
  task:any;
  title:string = '';
  constructor(private _ActivatedRoute:ActivatedRoute , private _TasksService:TasksService , private _Router:Router , private _Title:Title){}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.queryParamMap.get('id');
    this.task = this._TasksService.tasks[this.id];
    this._Title.setTitle(this.task.title +' - Task Manager' );

  }
  saveTask(){
    this._TasksService.updateTask(this.id ,this.task );
    this._Router.navigate(['/']);
  }

  deleteTask(){
    this._TasksService.deleteTask(this.id);
    this._Router.navigate(['/']);
  }
  cancele(){ this._Router.navigate(['/']) }



}
