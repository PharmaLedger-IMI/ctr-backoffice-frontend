import { Component, OnInit } from '@angular/core';
import {Locale} from '../locale';
import {LocaleService} from '../locale.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.css']
})
export class LocaleListComponent implements OnInit {

  locales: Locale[] = [];

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {
    this.getLocales();
  }

  getLocales(): void {
    this.localeService.getLocales()
      .subscribe(locales => this.locales = locales);
  }

  add(code: string): void {
    const cod = code.trim();
    if (!cod) { return; }
    this.localeService.addLocale({code: cod, description: ''}  as Locale)
      .subscribe(locale => {
        this.locales.push(locale);
      });
  }

  delete(locale: Locale): void {
    this.locales = this.locales.filter(l => l !== locale);
    this.localeService.deleteLocale(locale).subscribe();
  }
}
