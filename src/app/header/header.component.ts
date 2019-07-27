import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { from, Subscription } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   authListenerSub: Subscription;

  loggedin = false;
  userId: string;
  User: User;
  Name = ' ';



  constructor( private router: Router, public authService: AuthenticationService, public userData: UserDataService) {
    this.loggedin = this.authService.Userlogin;
    this.userId = this.authService.id;
}


user() {

    console.log('user');
  }

signOut() {
  this.authService.logout();
}

  ngOnInit() {
    if (this.loggedin) {
      this.authService.getUser(this.userId).subscribe(userData => {
        this.User = {
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          discription: userData.discription,
          about: userData.about
        };
        this.Name = this.User.FirstName + ' ' + this.User.LastName;
        this.userData.User = this.User;
        console.log(this.userData.User);




      });
    }
  }

}
