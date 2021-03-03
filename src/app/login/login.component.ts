import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  login(auUsername : string, auPassword : string) {
    let self = this;
    this.messageService.add("Logging in \""+auUsername+"\"");
    this.authService.login(auUsername, auPassword,
      function(err, res) {
        if (err) {
          self.log("Logged in \""+auUsername+"\" failed "+JSON.stringify(err));
          if (err?.status == 401) { // HTTP status Unauthorized
            self.log("WRONG USER/PASS! TRY AGAIN!");
          } else {
            self.log("Weird error!");
          }
        } else {
          self.log("Logged in "+auUsername+" res="+JSON.stringify(res));
          self.router.navigate(['/dashboard']); // TODO navigate to proper profile entry page
        }
      }
    );
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
      this.messageService.add(`LoginComponent: ${message}`);
  }
}