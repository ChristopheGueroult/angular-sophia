import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item.model';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collection: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  getCollection(): Observable<Item[]> {
    return this.collection;
  }

  setCollection(col: Observable<Item[]>): void {
    this.collection = col;
  }

  update(item: Item) {
    console.log(item);
  }

  addItem(item: Item) {
    // this.collection.push(item);
  }
}
