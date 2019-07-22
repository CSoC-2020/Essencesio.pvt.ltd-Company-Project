import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLogin = false;
  private LoginUpdated = new Subject();

  getLoginUpdateListener() {
    return this.LoginUpdated.asObservable();
  }


  getLoginStatus() {
    return this.isUserLogin;
  }

  constructor() { }
}
