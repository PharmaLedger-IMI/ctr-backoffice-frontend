import { Component, OnInit , Input} from '@angular/core';
import {Locale} from '../locale';
import {ActivatedRoute} from '@angular/router';
import {LocaleService} from '../locale.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  locale: Locale | undefined;
  constructor(
    private route: ActivatedRoute,
    private localeService: LocaleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLocale();
  }

  getLocale(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.localeService.getLocale(code)
        .subscribe(locale => this.locale = locale);
    }
  }

  save(): void {
    if (this.locale !== undefined) {
      this.localeService.updateLocale(this.locale)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
