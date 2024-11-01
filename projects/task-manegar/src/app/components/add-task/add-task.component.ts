import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {

  constructor(private _TasksService:TasksService , private _Router:Router , private _Title:Title){}

  saveTask(title:any , disc:any):void
  {
    this._TasksService.saveTask(title.value , disc.value)
    this._Router.navigate(['/'])
  }

  ngOnInit(): void {
    this._Title.setTitle('add new Task');
  }

}
