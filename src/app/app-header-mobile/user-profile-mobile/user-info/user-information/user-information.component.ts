import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  User: User;
  name: string;

  constructor(public userData: UserDataService) {
    this.User = this.userData.User;
    this.name = this.User.FirstName + ' ' + this.User.LastName;
  }

  ngOnInit() {
  }

}
