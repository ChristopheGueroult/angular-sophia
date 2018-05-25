import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../shared/interfaces/item.model";
import {State} from "../../../shared/enums/state.enum";
import {CollectionService} from "../../../core/services/collection.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state = State;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }

  delete(): void {
    this.collectionService.delete(this.item);
  }

}
