# NG-ZORRO使用过程中遇到的问题记录

## Can't bind to 'formGroup' since it isn't a known property of 'form'错误解决方案

[https://www.jianshu.com/p/feac8adef39e](https://www.jianshu.com/p/feac8adef39e)

```code
// app.module.ts中导入ReactiveFormsModule

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...
    ReactiveFormsModule
  ]
})
```

## angular提示ERROR Error: InvalidPipeArgument: 'Missing locale data for the locale "zh-cn".' for pipe '

[http://www.pianshen.com/article/9707161001/](http://www.pianshen.com/article/9707161001/)

```code
// 在app.module.ts中导入
import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';
registerLocaleData(zh);
```