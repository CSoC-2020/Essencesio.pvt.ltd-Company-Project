import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stopnc';
  // contains value of screen size
  public innerWidth: any;

  // Assigns value of current screen size in innerwidth variable when component is generated
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('Screen Size: ' + this.innerWidth);

  }
    // Assigns value of current screen size in innerwidth variable whenever the screen is resized
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}
}
