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

  arcSelected?: AppResource; // needed ? to indicate optional !???

  //constructor() { }
  constructor(private arcService: AppResourceService) {}

  ngOnInit(): void {
      this.getAppResources();
  }

  onSelect(arc: AppResource): void {
      this.arcSelected = arc;
      console.log("Selected Arc.id=", this.arcSelected.id);
  }

  getAppResources(): void {
      this.arcService.getAppResources()
          .subscribe(arcArray => this.arcCollection = arcArray);
  }
}
