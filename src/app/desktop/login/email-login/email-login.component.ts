import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public authService: AuthenticationService) {}

  onLogin(email: string, password: string) {
    if (email === '' && password === '') {
      window.alert('Please input correct value');
      return;
    } else {
      this.authService.createUser(email, password);
      console.log(email);
      console.log(password);


  }
}
}
