import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppresourceComponent } from './appresource/appresource.component';
import { AppresourceDetailComponent } from './appresource-detail/appresource-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppresourceComponent,
    AppresourceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
