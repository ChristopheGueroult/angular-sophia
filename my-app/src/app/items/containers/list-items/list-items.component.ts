import {Component, OnDestroy, OnInit} from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  collection: Item[]; // first example using an array
  collection2: Observable<Item[]>; // second example using observable and async pipe
  form: FormGroup;
  private sub: Subscription;

  constructor(
    private collectionService: CollectionService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    // example : subscribe to an observable and get data in an array
    // u have to use a variable for the subscribtion
    this.sub = this.collectionService.getCollection().subscribe((data) => {
      this.collection = data;
    });

    // example 2 using Observable and pipe async in html for subcription and unsubscribe automatically
    this.collection2 = this.collectionService.getCollection();

  }

  createForm(): void {
    this.form = this.fb.group({
      filter: ''
    });
  }

  ngOnDestroy(): void {
    // don't forget to unsubscribe
    this.sub.unsubscribe();
  }

}
