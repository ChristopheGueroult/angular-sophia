import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../shared/interfaces/item.model";
import {State} from "../../../shared/enums/state.enum";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state = State;
  constructor() { }

  ngOnInit() {
  }

}
