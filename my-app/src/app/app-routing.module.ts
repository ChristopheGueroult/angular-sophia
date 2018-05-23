import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/containers/home/home.component";
import {PageNotFoundComponent} from "./page-not-found/containers/page-not-found/page-not-found.component";
import {ListItemsComponent} from "./items/containers/list-items/list-items.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListItemsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
