import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.css']
})
export class LoginMobileComponent implements OnInit {
  userInfo: any;
  private authListenerSub: Subscription;
  private loggedin = false;
  constructor(private router: Router,  private socialAuthService: AuthService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  public  signinWithGoogle() {
    console.log('google');
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
       // on success
       // this will return user data from google. What you need is a user token which you will send it to the server
       this.userInfo = userData;
       this.authenticationService.googleLogin(this.userInfo.id, this.userInfo.email, this.userInfo.name).then((data) => {
         console.log(data);
         this.authListenerSub = this.authenticationService.getauthStatusListener().subscribe(
          isAuthenticated => {
          this.loggedin = isAuthenticated;
          console.log(this.loggedin);
          if (this.loggedin) {
            this.authenticationService.Userlogin = true;
            this.router.navigate(['/']);
          }
        });
       });
       });
 }
 public facebookLogin() {
  let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
          //this will return user data from facebook. What you need is a user token which you will send it to the server
          console.log(userData.email);
          this.userInfo = userData;
          this.authenticationService.googleLogin(this.userInfo.id, this.userInfo.email, this.userInfo.name).then((data) => {
            console.log(data);
            this.authListenerSub = this.authenticationService.getauthStatusListener().subscribe(
             isAuthenticated => {
             this.loggedin = isAuthenticated;
             console.log(this.loggedin);
             if (this.loggedin) {
               this.authenticationService.Userlogin = true;
               this.router.navigate(['/']);
             }
           });
          });
     }
  );
}}
