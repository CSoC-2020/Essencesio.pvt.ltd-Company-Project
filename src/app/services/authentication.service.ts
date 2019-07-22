import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from '../models/auth-data.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const authData: AuthData = {email, password};
    console.log(authData);
    this.http.post('http://localhost:3000/api/user/signup', authData)
    .subscribe(response => {
        console.log(response);
    });
}

login(email: string, password: string) {
    const authData: AuthData = {email, password};
    this.http.post('http://localhost:3000/api/user/login', authData)
    .subscribe(response => {
        console.log(response);
    });
}
}
