import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmLayoutComponent } from './sm-layout/sm-layout.component';
import { SmSiderComponent } from './sm-sider/sm-sider.component';
import { SmHeaderComponent } from './sm-header/sm-header.component';
import { SmContentComponent } from './sm-content/sm-content.component';
import { SmFooterComponent } from './sm-footer/sm-footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SmLayoutComponent,
    SmSiderComponent,
    SmHeaderComponent,
    SmContentComponent,
    SmFooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
