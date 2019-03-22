import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd'; // 国际化


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  infos = [{
    name: '李铁柱',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    name: '王二妞',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    name: '张三',
    summary: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }]

  validateForm: FormGroup;
  modalTitle: any = {
    'ADD': '添加信息',
    'EDIT': '修改信息',
    'VIEW': '查看详细信息',
  };
  operateType: string;
  segments: any = ['白　带', '白黄带', '黄　带', '黄绿带', '绿　带', '绿蓝带', '蓝　带', '蓝红带', '红　带', '红黑带', '黑　带'];

  isEnglish = false;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) { 
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name              : [ null, Validators.required],
      gender            : [ '1', [ Validators.required ] ],
      birdthday         : [ null, [ Validators.required ] ],
      address           : [ null, [ Validators.required ] ],
      segment           : [ null, [ Validators.required ] ],
      parentName        : [ null, [ Validators.required ] ],
      phoneNumberPrefix : [ '+86' ],
      phoneNumber       : [ null, [ Validators.required ] ],
      course            : [ null, [ Validators.required ] ]
    })

  }

  isVisible = false;
  isOkLoading = false;

  showModal(type): void {
    this.isVisible = true;
    this.operateType = type;

    this.changeLanguage();
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);

    console.log(this.validateForm.value);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // 提交表单
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  changeLanguage(): void {
    // this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.i18n.setLocale(zh_CN);
    this.isEnglish = !this.isEnglish;
  }

}
