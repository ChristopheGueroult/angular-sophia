import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { StateDirective } from './directives/state.directive';
import {ItemsRoutingModule} from "./items-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, StateDirective],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
