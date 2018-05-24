import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormConnectComponent } from './components/form-connect/form-connect.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [NavComponent, FormComponent, ReactiveFormComponent, FormConnectComponent],
  exports: [NavComponent, FormComponent, ReactiveFormComponent, FormConnectComponent]
})
export class SharedModule { }
