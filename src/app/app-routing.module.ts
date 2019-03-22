import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { InformationComponent } from './information/information.component';
import { TodolistComponent } from './todolist/todolist.component';
import { InfoDetailComponent } from './info-detail/info-detail.component'

const routes: Routes = [
  // 路由默认
  {
    path: '',
    redirectTo: '/',
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
  },
  // 详情
  {
    path: 'infodetail',
    component: InfoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
