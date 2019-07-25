import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-email-login-mobile',
  templateUrl: './email-login-mobile.component.html',
  styleUrls: ['./email-login-mobile.component.css']
})
export class EmailLoginMobileComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(email: string, password: string, firstname: string, lastname: string) {
    if (email === '' && password === '') {
      window.alert('Please input correct value');
      return;
    } else {
      this.authService.createUser(email, password, firstname, lastname);
      console.log(email);
      console.log(password);


  }
}
  public scroll(element: any) {
  }
}
