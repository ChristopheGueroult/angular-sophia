import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemsComponent} from "./containers/list-items/list-items.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
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
