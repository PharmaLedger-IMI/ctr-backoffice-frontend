import { Component, OnInit } from '@angular/core';

import { AppResource } from '../appresource';
import { AppResourceService } from '../appresource.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arcCollection: AppResource[] = [];

  constructor(private arcService: AppResourceService) { }

  ngOnInit() {
    this.getAppResources();
  }

  getAppResources(): void {
    this.arcService.getAppResources()
      .subscribe(arcArray => this.arcCollection = arcArray.slice(1, 5));
  }
}
