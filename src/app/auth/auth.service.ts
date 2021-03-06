import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { User } from '../user';

@Injectable()
export class AuthService {

  static readonly CTR_USER : string = "ctr_user";

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
  login(username: string, password: string|undefined, callback: (err:any, data:any) => void) : void {
    // backend /auth/login returns token
    this.http.post<{ token: string; }>(this.authLoginUrl, { username, password })
    .subscribe(
      (res: any) => {
        this.log(`posted ${username},${password}, ${res}`);
        if (!res.token || !res.username) {
          callback("Missing username/token field in "+JSON.stringify(res), null);
          return;
        }
        this.setSession(res);
        callback(null, res);
      },
      (err: any) => {
        callback(err, null);
      }
    );
  }

  private setSession(authResult: any): void {
    let user = new User();
    user.username = authResult.username;
    user.token = authResult.token;
    sessionStorage.setItem(AuthService.CTR_USER, JSON.stringify(user));
  }

  public logout() {
    sessionStorage.clear();
  }

  public isLoggedIn() : boolean {
    return !!sessionStorage.getItem(AuthService.CTR_USER);
  }

  public isLoggedOut() : boolean {
    return !this.isLoggedIn();
  }

  public getToken() : string | undefined {
    return this.getUser()?.token;
  }

  public getUser() : User | undefined {
    if (this.isLoggedIn()) {
      return JSON.parse(sessionStorage.getItem(AuthService.CTR_USER)!);
    } else {
      return undefined;
    }
  }

  public getUsername() : string | undefined {
    return this.getUser()?.username;
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
