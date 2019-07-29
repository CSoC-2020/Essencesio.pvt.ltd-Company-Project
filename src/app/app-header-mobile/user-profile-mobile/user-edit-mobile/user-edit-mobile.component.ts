import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-mobile',
  templateUrl: './user-edit-mobile.component.html',
  styleUrls: ['./user-edit-mobile.component.css']
})
export class UserEditMobileComponent implements OnInit {
  name: string;
  cridential: string;
  about: string;
  id: string;
  constructor(public User: UserDataService, public auth: AuthenticationService, private http: HttpClient, private router: Router) {
    this.name = this.User.User.Name;
    this.cridential = this.User.User.about;
    this.about = this.User.User.discription;
  }

  ngOnInit() {
    this.id = this.auth.id;

  }
  editUser() {
    const user = {
      id: this.auth.id,
      name: this.name,
      cridential: this.cridential,
      about: this.about
    };
    this.http.put('http://localhost:3000/api/user/userUpdate' + this.id, user).subscribe(response => {
      console.log(response);

      this.router.navigate(['/mobile/user']);

    });
}
}
