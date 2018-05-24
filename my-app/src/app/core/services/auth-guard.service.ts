import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {SignInService} from "./sign-in.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private signInService: SignInService
  ) { }

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return this.signInService.auth;
  }
}
