import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { from, Subscription } from 'rxjs';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  userLogin: boolean;
  private loginUpdate: Subscription;


  constructor(private loginService: LoginService, private router: Router) {


      this.userLogin = loginService.getLoginStatus();
    }


  Login() {
    this.userLogin = true;
    console.log(this.userLogin);

  }
  user() {

    console.log('user');
  }


  ngOnInit() {
    this.userLogin = this.loginService.getLoginStatus();
    this.loginUpdate = this.loginService.getLoginUpdateListener().subscribe(
      (Login: boolean) => {
        this.userLogin = Login;
      }
    );
  }

}
