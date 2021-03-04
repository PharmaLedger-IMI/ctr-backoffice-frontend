import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { MessageService } from '../message.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = new User();
  }

  login() {
    let self = this;
    if (!self.user.username) {
      self.log("Username cannot be empty!");
      return;
    }
    let auUsername = self.user.username!;
    let auPassword = self.user.password;
    self.user.password = '';
    this.messageService.add("Logging in \"" + auUsername + "\"");
    this.authService.login(auUsername, auPassword,
      function (err, res) {
        if (err) {
          self.log("Logged in \"" + auUsername + "\" failed " + JSON.stringify(err));
          if (err?.status == 401) { // HTTP status Unauthorized
            self.log("WRONG USER/PASS! TRY AGAIN!");
          } else {
            self.log("Weird error!");
          }
        } else {
          self.log("Logged in " + auUsername + " res=" + JSON.stringify(res));
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
