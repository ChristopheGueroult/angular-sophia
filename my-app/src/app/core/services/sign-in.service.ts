import { Injectable } from '@angular/core';
import {ConnectModel} from "../../shared/interfaces/connect.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  auth: boolean = false;
  login: string = 'chris';
  psw: string = 'superdady';

  constructor(
    private router: Router
  ) { }

  signIn(identifiants: ConnectModel) {
    console.log(identifiants);
    if (identifiants.login === this.login && identifiants.psw === this.psw) {
      this.auth = true;
      this.router.navigate(['/items/list']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  signOut() {
    this.auth = false;
    this.router.navigate(['/home']);
  }
}
