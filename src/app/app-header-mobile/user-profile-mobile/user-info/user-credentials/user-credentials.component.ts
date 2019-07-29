import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {
  User: User;
  userId: string;
  Name: string;


  constructor(public userData: UserDataService, public authService: AuthenticationService) {
    this.User = this.userData.User;
    this.userId = this.authService.id;


}



ngOnInit() {
  this.authService.getUser(this.userId).subscribe(userdata => {
    this.User = {
      Name: userdata.name,
      discription: userdata.discription,
      about: userdata.about
    };
    this.Name = this.User.Name;
    this.userData.User = this.User;
    console.log(this.userData.User);

});

}
}
