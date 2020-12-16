import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppResource } from '../appresource';
import { AppResourceService } from '../appresource.service';

@Component({
  selector: 'app-appresource-detail',
  templateUrl: './appresource-detail.component.html',
  styleUrls: ['./appresource-detail.component.css']
})
export class AppResourceDetailComponent implements OnInit {

  @Input() arc?: AppResource;

  constructor(
      private route: ActivatedRoute,
      private arcService: AppResourceService,
      private location: Location
  ) {}

  ngOnInit(): void {
      this.getAppResource()
  }

  getAppResource(): void {
      const idStr = this.route.snapshot.paramMap.get('id');
      if (!idStr) throw "id is null";
      const id = +idStr;
      this.arcService.getAppResource(id)
         .subscribe(arc => this.arc = arc);
  }

  goBack(): void {
      this.location.back();
  }
}
