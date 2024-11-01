import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

TasksService
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink ],
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(public _TasksService:TasksService , private _Title:Title){}


  ngOnInit(): void {
    this._Title.setTitle('Task manager')
  }

  deleteTask(i:number){
    this._TasksService.deleteTask(i);
  }

}
