import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  infos = [{
    name: '李铁柱',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    name: '王二妞',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    name: '张三',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }]

  constructor() { }

  ngOnInit() {
  }

}
