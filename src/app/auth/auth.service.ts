import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as moment from "moment";
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  private authLoginUrl = "http://localhost:3000/auth/login";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * Performs the login. Inspired on https://blog.angular-university.io/angular-jwt-authentication/
   * @param username 
   * @param password in clear text
   * @returns Observable<{ token: string }>
   */
  login(username: string, password: string, callback: (err:any, data:any) => void) : void {
    // backend /auth/login returns token
    this.http.post<{ token: string; }>(this.authLoginUrl, { username, password })
    .subscribe(
      (res: any) => {
        this.log(`posted ${username},${password}, ${res}`);
        this.setSession(res);
        callback(null, res);
      },
      (err: any) => {
        callback(err, null);
      }
    );
  }

  private setSession(authResult: { token: string; }): void {
    localStorage.setItem('ctr_token', authResult.token);
    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("ctr_token");
    //localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return false;
    //return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
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
    this.messageService.add(`AuthService: ${message}`);
  }
}
