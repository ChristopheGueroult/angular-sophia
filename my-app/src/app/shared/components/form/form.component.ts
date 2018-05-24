import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {State} from "../../enums/state.enum";
import {Item} from "../../interfaces/item.model";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() data: EventEmitter<Item> = new EventEmitter<Item>();
  state = State;
  states = Object.values(this.state); // return an array with values from an object
  newItem: Item;
  constructor() { }

  ngOnInit(): void {
    this.initNewItem();
  }

  initNewItem(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    }
  }

  process(): void {
    this.data.emit(this.newItem);
  }

}
