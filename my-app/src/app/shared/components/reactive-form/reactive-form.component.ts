import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {State} from "../../enums/state.enum";
import {Item} from "../../interfaces/item.model";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Output() data: EventEmitter<Item> = new EventEmitter<Item>();
  form: FormGroup;
  states = Object.values(State);
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ], // <--- the FormControl called "name"
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ], // <--- the FormControl called "reference"
      state: State.ALIVRER, // <--- the FormControl called "state"
    });
  }

  process(): void {
    this.data.emit(this.form.value);
    this.form.reset(); // vide le form
  }

}
