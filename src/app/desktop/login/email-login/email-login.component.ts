import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {

  private authListenerSub: Subscription;
  private loggedin = false;

  ngOnInit() {
  }
  constructor(public authService: AuthenticationService, private router: Router) {}

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

}
