import { Component, OnInit } from '@angular/core';
import {Locale} from '../locale';
import {LocaleService} from '../locale.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  locales: Locale[] = [];

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {
    this.getLocales();
  }

  getLocales(): void {
    this.localeService.getLocales()
      .subscribe(locales => this.locales = locales.slice(1, 5));
  }
}
