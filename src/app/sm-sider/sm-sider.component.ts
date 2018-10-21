import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-sider',
  templateUrl: './sm-sider.component.html',
  styleUrls: ['./sm-sider.component.css']
})
export class SmSiderComponent implements OnInit {

  menus = [
    { 
      id : 1,
      text: '仪表盘'
    },
    { 
      id : 2,
      text: '信息库'
    },
    {
      id : 3,
      text: 'TODO'
    }
  ];

  selectedMenu: Number

constructor() { }

ngOnInit() {
}

// 选中菜单
onSelect(id: Number): void{
  this.selectedMenu = id;
}

}
