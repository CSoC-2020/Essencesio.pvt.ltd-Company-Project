import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  screenWidth: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenWidth = window.innerWidth;
          if (this.screenWidth <= 920) {
            this.router.navigate(['/mlogin']);

          }
    }
}
