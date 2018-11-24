import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmLayoutComponent } from './sm-layout/sm-layout.component';
import { SmSiderComponent } from './sm-sider/sm-sider.component';
import { SmHeaderComponent } from './sm-header/sm-header.component';
import { SmContentComponent } from './sm-content/sm-content.component';
import { SmFooterComponent } from './sm-footer/sm-footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DasboardComponent } from './dasboard/dasboard.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './information/information.component';
import { TodolistComponent } from './todolist/todolist.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SmLayoutComponent,
    SmSiderComponent,
    SmHeaderComponent,
    SmContentComponent,
    SmFooterComponent,
    DasboardComponent,
    InformationComponent,
    TodolistComponent,
    InfoDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
