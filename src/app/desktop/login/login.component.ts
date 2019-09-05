import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  screenWidth: any;
  userInfo: any;
  private authListenerSub: Subscription;
  private loggedin = false;


  constructor(private router: Router,  private socialAuthService: AuthService, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenWidth = window.innerWidth;
          if (this.screenWidth <= 920) {
            this.router.navigate(['/mlogin']);

          }
    }
    public navigate() {
        this.authenticationService.Userlogin = true;
        this.router.navigate(['/']);
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
}
