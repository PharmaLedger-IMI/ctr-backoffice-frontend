import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppResourceComponent } from './appresource/appresource.component';
import { AppResourceDetailComponent } from './appresource-detail/appresource-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtInterceptor } from './jwt.interceptor';
import { LocaleComponent } from './locale/locale.component';
import { LocaleListComponent } from './locale-list/locale-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LocaleSearchComponent } from './locale-search/locale-search.component';
import { AppresourceSearchComponent } from './appresource-search/appresource-search.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';

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
    LocaleSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
