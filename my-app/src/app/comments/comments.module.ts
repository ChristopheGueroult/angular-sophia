import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { ListCommentsComponent } from './containers/list-comments/list-comments.component';
import {CommentsRoutingModule} from "./comments-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  declarations: [CommentComponent, ListCommentsComponent]
})
export class CommentsModule { }
