import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
 name: string;
  cridential: string;
  about: string;
  id: string;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(public User: UserDataService, public auth: AuthenticationService, private http: HttpClient, private router: Router ) {
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

      this.router.navigate(['/user']);

    });


}}
