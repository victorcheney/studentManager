import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '乾景';

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  /** 菜单 **/
  menus: any = [{
    name: '仪表盘',
    icon: 'dashboard',
    children: [{
      name: '数据分析仪表盘',
      path: '/dashboard',
      children: []
    }]
  },
  {
    name: '用户',
    icon: 'user',
    children: [{
      name: '信息列表',
      path: '/info',
      children: []
    },
    {
      name: 'Bill',
      path: '',
      children: []
    }]
  }]
}
