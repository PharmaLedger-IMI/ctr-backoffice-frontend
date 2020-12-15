import { Component, OnInit } from '@angular/core';
import { AppResource } from '../appresource';

@Component({
  selector: 'app-appresource',
  templateUrl: './appresource.component.html',
  styleUrls: ['./appresource.component.css']
})
export class AppresourceComponent implements OnInit {

  arc: AppResource = {
      id: 1,
      key: 'x',
      locale: { code: "en" },
      value: 'value',
      help: 'help'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
