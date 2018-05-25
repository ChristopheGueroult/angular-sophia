import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { StateDirective } from './directives/state.directive';
import {ItemsRoutingModule} from "./items-routing.module";
import { AddComponent } from './containers/add/add.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ListItemsComponent, ItemComponent, StateDirective, AddComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
