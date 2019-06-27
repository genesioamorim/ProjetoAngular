import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormCadastroComponent } from './form-cadastro.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    FormCadastroComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ReactiveFormsModule
  ],

  exports: [
    FormCadastroComponent,
    CommonModule,
    FormsModule
  ]
})
export class FormCadastroModule { }
