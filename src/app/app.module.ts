import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppResourceComponent } from './appresource/appresource.component';
import { AppResourceDetailComponent } from './appresource-detail/appresource-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LocaleComponent} from './locale/locale.component';
import {LocaleListComponent} from './locale-list/locale-list.component';
import {MessagesComponent} from './messages/messages.component';
import {LocaleSearchComponent} from './locale-search/locale-search.component';
import { AppresourceSearchComponent } from './appresource-search/appresource-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppResourceComponent,
    AppResourceDetailComponent,
    DashboardComponent,
    LocaleComponent,
    LocaleListComponent,
    MessagesComponent,
    DashboardComponent,
    AppresourceSearchComponent,
    LocaleSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
