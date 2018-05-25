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
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }
}
