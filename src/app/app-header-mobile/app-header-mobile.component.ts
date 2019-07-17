import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import {Input} from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './app-header-mobile.component.html',
  styleUrls: ['./app-header-mobile.component.css']
})
export class AppHeaderMobileComponent implements OnInit {
  userLogin: boolean;
  private loginUpdate: Subscription;
  currentRoute: Router;

  constructor(private loginService: LoginService, private router: Router ) {

    this.userLogin = loginService.getLoginStatus();
  }
  reason = '';
  // Checks if Input Tag is in focus
  DisplayCategories = true;

  // Checks if Input tag is empty
  SearchInputEmpty = true;

  // Checks if Secondary Input is empty
  inputInSecondarySearch = false;

  // Checks if Secondary Input should be displayed

  displaySearchbar = false;

  @ViewChild('reference', {static: false}) nameField: ElementRef;

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  // Put Input bar in focus when search field is erased
  inputFocus(): void {
    this.nameField.nativeElement.focus();
    this.SearchInputEmpty = true;
    this.inputInSecondarySearch = false;
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  onHide(val: boolean) {

    this.SearchInputEmpty = val;
    this.DisplayCategories = val;
    console.log('parent Component');
    console.log(this.DisplayCategories);
    console.log(this.SearchInputEmpty);




  }
  shiowContent(evet) {
    this.DisplayCategories = true;

  }
    allTrue(event) {
      this.SearchInputEmpty = true;

    }

  // Change value of DisplayCategories value to false when Input tag is in focus
       focusoutHandler(event) {
    this.DisplayCategories = false;
    console.log('Focus In');
    console.log('Display' + this.DisplayCategories);
    }

  // Change value of DisplayCategories value to true when Input tag is out of focus
    private focusinHandler(event) {
      this.DisplayCategories = true;
      console.log('Focus Out');
      console.log('Display' + this.DisplayCategories);
      }

  // Change the value of SearchInputEmpty to false when Input is typed and true When Input is reased
      onKey(event) {
        const inputValue = event.target.value;
        if (inputValue === '') {
          this.SearchInputEmpty = true;
          this.displaySearchbar = false;
          console.log('SearchInput' + this.SearchInputEmpty);

        } else {
          this.SearchInputEmpty = false;
          this.displaySearchbar = true;
          console.log('SearchInput' + this.SearchInputEmpty);
        }
      }
    // Change the value of variables when input is passed in second search bar
      onKeySecond(event) {
        const inputValue = event.target.value;
        if (inputValue === '') {
          this.SearchInputEmpty = true;
          this.inputInSecondarySearch = false;
          console.log('SearchInput' + this.SearchInputEmpty);
          console.log('secondarysearch' + this.inputInSecondarySearch);

        } else {
          this.inputInSecondarySearch = true;
          this.SearchInputEmpty = false;
          console.log('SearchInput' + this.SearchInputEmpty);
          console.log('secondarysearch' + this.inputInSecondarySearch);

        }
      }
  ngOnInit() {
    this.currentRoute = this.router;

    this.userLogin = this.loginService.getLoginStatus();
    this.loginUpdate = this.loginService.getLoginUpdateListener().subscribe(
      (Login: boolean) => {
        this.userLogin = Login;
      }
    );
  }

  Login() {
    this.userLogin = true;
    console.log(this.userLogin);

  }





}






