import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  userLogin: boolean;
  private loginUpdate: Subscription;


  constructor(private loginService: LoginService) {

      this.userLogin = loginService.getLoginStatus();
    }


  Login() {
    this.userLogin = true;
    console.log(this.userLogin);

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
