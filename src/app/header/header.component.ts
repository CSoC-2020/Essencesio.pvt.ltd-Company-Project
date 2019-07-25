import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { from, Subscription } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   authListenerSub: Subscription;

  loggedin = false;




  constructor( private router: Router, public authService: AuthenticationService) {
    this.loggedin = this.authService.Userlogin;
}


user() {

    console.log('user');
  }


  ngOnInit() {


  }

}
