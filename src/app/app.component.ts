import { Component, OnInit, HostListener } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stopnc';
  // contains value of screen size
  public innerWidth: any;
  constructor(private authservice: AuthenticationService) {
  }

  // Assigns value of current screen size in innerwidth variable when component is generated
  ngOnInit() {
    console.log('auth');
    this.authservice.autoAuthUser();
    this.innerWidth = window.innerWidth;
    console.log('Screen Size: ' + this.innerWidth);

  }
    // Assigns value of current screen size in innerwidth variable whenever the screen is resized
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}
}
