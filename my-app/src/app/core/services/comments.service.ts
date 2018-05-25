import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../../shared/interfaces/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  getComments(): Observable<Comment[]> {
    // httpClient always returns Observables
    return this.http.get<Comment[]>(`${this.url}/comments`);
  }
}
