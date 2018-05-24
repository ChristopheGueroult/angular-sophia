import { Component, OnInit } from '@angular/core';
import {SignInService} from "../../../core/services/sign-in.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  isCollapsed = true;

  constructor(
    public signInService: SignInService
  ) { }

  ngOnInit() {
    this.title = "Super App";
  }

}
