import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [



  {path:'add-task' , component:AddTaskComponent},
  {path:'task' , component:TaskComponent},
  {path:'home' , component:HomeComponent},
  {path:'' , component:HomeComponent},
  {path:'**' , component:NotFoundComponent},

];
