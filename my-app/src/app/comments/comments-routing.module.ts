import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCommentsComponent} from "./containers/list-comments/list-comments.component";

const appRoutes: Routes = [
  { path: 'list', component: ListCommentsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class CommentsRoutingModule { }
