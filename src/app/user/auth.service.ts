import { Injectable } from '@angular/core';
import { IUser } from '../shared/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  currentUser!: IUser;

  loginUser(username: String, password: string){
    this.currentUser={
      userName:"Lakshya452",
      firstName:"Lakshya",
      lastName:"Agarwal",
      id:1,
      address:" India",
      mobileNo:"9984763990"
    }
    console.log("logged in");
    this.router.navigate(['/events'])
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  getUser(){
    return this.currentUser
  }
}
