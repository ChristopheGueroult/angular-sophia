import { Component, OnInit } from '@angular/core';
import {Item} from "../../../shared/interfaces/item.model";
import {ConnectModel} from "../../../shared/interfaces/connect.model";
import {SignInService} from "../../../core/services/sign-in.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private signInService: SignInService
  ) { }

  ngOnInit() {
  }

  signIn(identifiants: ConnectModel): void {
    this.signInService.signIn(identifiants);
  }

}
