import { Component, OnInit } from '@angular/core';
import {Locale} from '../locale';
import {LocaleService} from '../locale.service';
import { AppResource } from '../appresource';
import { AppResourceService } from '../appresource.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  arcCollection: AppResource[] = [];
  locales: Locale[] = [];

  constructor(private localeService: LocaleService, private arcService: AppResourceService) { }

  ngOnInit(): void{
    this.getAppResources();
    this.getLocales();
  }

  getLocales(): void {
    this.localeService.getLocales()
      .subscribe(locales => this.locales = locales.slice(1, 5));
  }

  getAppResources(): void {
    this.arcService.getAppResources()
      .subscribe(arcArray => this.arcCollection = arcArray.slice(1, 5));
  }
}
