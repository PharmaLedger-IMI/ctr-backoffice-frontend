import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocaleListComponent} from './locale-list/locale-list.component';
import {AppResourceComponent} from './appresource/appresource.component';
import {AppResourceDetailComponent} from './appresource-detail/appresource-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LocaleComponent} from './locale/locale.component';

const routes: Routes = [
  {path: 'locales', component: LocaleListComponent},
  {path: 'appresource', component: AppResourceComponent},
  {path: 'appresource/:id', component: AppResourceDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'locale/:code', component: LocaleComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
