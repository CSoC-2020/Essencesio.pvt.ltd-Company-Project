import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-profile-mobile',
  templateUrl: './user-profile-mobile.component.html',
  styleUrls: ['./user-profile-mobile.component.css']
})
export class UserProfileMobileComponent implements OnInit {

  authListenerSub: Subscription;

  loggedin = false;
  userId: string;
  User: User;
  Name = ' ';

  constructor(private router: Router, public authService: AuthenticationService, public UserData: UserDataService) {
    this.loggedin = this.authService.Userlogin;
    this.userId = this.authService.id;
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
        this.UserData.User = this.User;





      });
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/mobile/login']);
  }
  }


