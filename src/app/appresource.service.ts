import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { AppResource } from './appresource';
import { APPRESOURCES } from './mock-appresource';

@Injectable({
  providedIn: 'root'
})
export class AppResourceService {
  private arcUrl = "http://localhost:3000/ctrial/appresource";

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getAppResources(): Observable<AppResource[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('AppResourceService: fetched arcCollection');
      //return of(APPRESOURCES);
      return this.http.get<AppResource[]>(this.arcUrl)
        .pipe(
          tap(_ => this.log(`fetched AppResources`)),
          catchError(this.handleError<AppResource[]>('getAppResources', []))
        );
  }

  getAppResource(id: number): Observable<AppResource | undefined> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`AppResourceService: fetched arc.id=${id}`);
      return of(APPRESOURCES.find(arc => arc.id === id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
      this.messageService.add(`AppResourceService: ${message}`);
  }

}
