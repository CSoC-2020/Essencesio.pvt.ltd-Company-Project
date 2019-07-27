import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email-login-mobile',
  templateUrl: './email-login-mobile.component.html',
  styleUrls: ['./email-login-mobile.component.css']
})
export class EmailLoginMobileComponent implements OnInit {

  private authListenerSub: Subscription;
  private loggedin = false;

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
    this.authService.login(email, password);
    this.authListenerSub = this.authService.getauthStatusListener().subscribe(
      isAuthenticated => {
      this.loggedin = isAuthenticated;
      console.log(this.loggedin);
      if (this.loggedin) {
        this.authService.Userlogin = true;
        this.router.navigate(['/']);
      }
    });
  }
  onSignup(email: string, password: string, firstname: string, lastname: string) {
    if (email === '' && password === '' && firstname === '') {
      window.alert('Please input correct value');
      return;
    } else {
      this.authService.createUser(email, password, firstname, lastname);
      console.log(email);
      console.log(password);


  }
}

  public scroll(element: any) {
  }
}
