import { Component, OnInit, Input } from '@angular/core';
import { AppResource } from '../appresource';

@Component({
  selector: 'app-appresource-detail',
  templateUrl: './appresource-detail.component.html',
  styleUrls: ['./appresource-detail.component.css']
})
export class AppResourceDetailComponent implements OnInit {

  @Input() arc?: AppResource;

  constructor() { }

  ngOnInit(): void {
  }

}
