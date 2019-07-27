import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User: User;
  name: string;

  constructor(public userData: UserDataService) {
    this.User = this.userData.User;
    this.name = this.User.FirstName + ' ' + this.User.LastName;
  }

  ngOnInit() {

  }

}
