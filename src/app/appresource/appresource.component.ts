import { Component, OnInit } from '@angular/core';
import { AppResource } from '../appresource';
import { APPRESOURCES } from '../mock-appresource';

@Component({
  selector: 'app-appresource',
  templateUrl: './appresource.component.html',
  styleUrls: ['./appresource.component.css']
})
export class AppresourceComponent implements OnInit {

  /* arc: AppResource = {
      id: 1,
      key: 'x',
      locale: { code: "en" },
      value: 'value',
      help: 'help'
  }; */ // not used anymore

  arcCollection = APPRESOURCES; /* collection of all AppResources */

  arcSelected?: AppResource; // needed ? to indicate optional !???

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(arc: AppResource): void {
      this.arcSelected = arc;
      console.log("Selected Arc.id=", this.arcSelected.id);
  }

}
