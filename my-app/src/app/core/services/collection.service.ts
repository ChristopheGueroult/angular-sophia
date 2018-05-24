import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../shared/interfaces/item.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collection: Item[];
  private constructor() {
    this.setCollection(COLLECTION);
  }

  getCollection(): Item[] {
    return this.collection;
  }

  setCollection(col: Item[]): void {
    this.collection = col;
  }

  update(item: Item) {
    console.log(item);
  }

  addItem(item: Item) {
    this.collection.push(item);
  }
}
