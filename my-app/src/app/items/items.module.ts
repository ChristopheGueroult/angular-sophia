import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListItemsComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
