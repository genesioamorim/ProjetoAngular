import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormCadastroComponent } from './form-cadastro.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [FormCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ], exports: [
    FormCadastroComponent,
    CommonModule
  ]
})
export class FormCadastroModule { }
