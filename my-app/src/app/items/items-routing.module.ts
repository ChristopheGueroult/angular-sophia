import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemsComponent} from "./containers/list-items/list-items.component";
import {RouterModule, Routes} from "@angular/router";
import {AddComponent} from "./containers/add/add.component";

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ItemsRoutingModule { }
