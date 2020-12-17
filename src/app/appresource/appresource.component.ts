import { Component, OnInit } from '@angular/core';

import { AppResource } from '../appresource';
import { AppResourceService } from '../appresource.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-appresource',
  templateUrl: './appresource.component.html',
  styleUrls: ['./appresource.component.css']
})
export class AppResourceComponent implements OnInit {

  /* arc: AppResource = {
      id: 1,
      key: 'x',
      locale: { code: "en" },
      value: 'value',
      help: 'help'
  }; */ // not used anymore

  arcCollection: AppResource[] = []; /* collection of all AppResources */

  //constructor() { }
  constructor(private arcService: AppResourceService) {}

  ngOnInit(): void {
      this.getAppResources();
  }

  getAppResources(): void {
    this.arcService.getAppResources()
        .subscribe(arcArray => this.arcCollection = arcArray);
  }

  add(arcKey: string, arcValue: string, arcHelp: string): void {
    this.arcService.add({ key: arcKey, value: arcValue, help: arcHelp } as AppResource)
      .subscribe(arc => this.arcCollection.push(arc));
  }
}
