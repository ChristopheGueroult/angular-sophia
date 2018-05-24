import { Component, OnInit } from '@angular/core';
import {Item} from "../../../shared/interfaces/item.model";
import {CollectionService} from "../../../core/services/collection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addItem(item: Item): void {
    this.collectionService.addItem(item);
    this.router.navigate(['/items/list']);
  }

}
