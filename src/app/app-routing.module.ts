import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { InformationComponent } from './information/information.component';
import { TodolistComponent } from './todolist/todolist.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // 仪表盘
  {
    path: 'dashboard',
    component: DasboardComponent
  },
  // 信息库
  {
    path: 'info',
    component: InformationComponent
  },
  // tudolist
  {
    path: 'todolist',
    component: TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
