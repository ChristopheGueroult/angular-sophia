import {Component, OnDestroy, OnInit} from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item.model';
import {FormControl} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  collection: Item[]; // first example using an array
  collection2: Observable<Item[]>;
  filter: FormControl = new FormControl;
  private sub: Subscription;

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    // example : subscribe to an observable and get data in an array
    // u have to use a variable for the subscribtion
    this.sub = this.collectionService.getCollection().subscribe((data) => {
      this.collection = data;
    });

    // example 2 using Observable and pipe async in html for subcription and unsubscribe automatically
    this.collection2 = this.collectionService.getCollection();
  }

  ngOnDestroy(): void {
    // don't forget to unsubscribe
    this.sub.unsubscribe();
  }

}
