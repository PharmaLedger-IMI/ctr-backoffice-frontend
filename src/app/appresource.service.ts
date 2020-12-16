import { Injectable } from '@angular/core';

import { AppResource } from './appresource';
import { APPRESOURCES } from './mock-appresource';

@Injectable({
  providedIn: 'root'
})
export class AppResourceService {

  constructor() { }

  getAppResources(): AppResource[] {
      return APPRESOURCES;
  }
}
