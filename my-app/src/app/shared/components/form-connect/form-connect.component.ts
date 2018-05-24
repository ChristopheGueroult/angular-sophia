import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../../interfaces/item.model";
import {State} from "../../enums/state.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConnectModel} from "../../interfaces/connect.model";

@Component({
  selector: 'app-form-connect',
  templateUrl: './form-connect.component.html',
  styleUrls: ['./form-connect.component.css']
})
export class FormConnectComponent implements OnInit {
  @Output() data: EventEmitter<ConnectModel> = new EventEmitter<ConnectModel>();
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.form = this.fb.group({
      login: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ], // <--- the FormControl called "name"
      psw: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ], // <--- the FormControl called "reference"
    });
  }

  process(): void {
    this.data.emit(this.form.value);
    this.form.reset(); // vide le form
  }

}
