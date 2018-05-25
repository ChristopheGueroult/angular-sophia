import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {CommentsService} from "../../../core/services/comments.service";
import {Comment} from "../../../shared/interfaces/comment.model";

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  comments$: Observable<Comment[]>;

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.comments$ = this.commentsService.getComments();
  }

}
