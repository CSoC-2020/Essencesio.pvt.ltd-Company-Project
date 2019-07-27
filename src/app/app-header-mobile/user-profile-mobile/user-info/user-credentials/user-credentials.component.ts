import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {
  User: User;
  name: string;


  constructor(public userData: UserDataService) {
    this.User = this.userData.User;
    this.name = this.User.FirstName + ' ' + this.User.LastName;
  }

  ngOnInit() {
  }

}
