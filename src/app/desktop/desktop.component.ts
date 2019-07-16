import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  currentRoute: Router;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router;
  }

}
