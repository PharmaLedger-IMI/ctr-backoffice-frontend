import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { AppResource } from './appresource';
import { APPRESOURCES } from './mock-appresource';

@Injectable({
  providedIn: 'root'
})
export class AppResourceService {

  constructor(private messageService: MessageService) { }

  getAppResources(): Observable<AppResource[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('AppResourceService: fetched arcCollection');
      return of(APPRESOURCES);
  }
}
