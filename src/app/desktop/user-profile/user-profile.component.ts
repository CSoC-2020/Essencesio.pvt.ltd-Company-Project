import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User: User;
  userId: string;
  Name: string;

  constructor(public userData: UserDataService, public authService: AuthenticationService) {
    this.userId = this.authService.id;
  }

  ngOnInit() {
    this.authService.getUser(this.userId).subscribe(userData => {
      this.User = {
        Name: userData.name,
        discription: userData.discription,
        about: userData.about
      };
      this.Name = this.User.Name;
      this.userData.User = this.User;
      console.log(this.userData.User);


  });
}

}
