import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AppResource } from './appresource';
import { APPRESOURCES } from './mock-appresource';

@Injectable({
  providedIn: 'root'
})
export class AppResourceService {

  constructor() { }

  getAppResources(): Observable<AppResource[]> {
      return of(APPRESOURCES);
  }
}
