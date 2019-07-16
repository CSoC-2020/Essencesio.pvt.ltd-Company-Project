import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  screenHeight: any;

  constructor() { }

  ngOnInit() {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;

          console.log(this.screenHeight);
    }
}
