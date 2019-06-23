import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosRoutingModule } from './medicos-routing.modules';


import { MedicosComponent } from './medicos.component';

@NgModule({
  declarations: [
    MedicosComponent,
    
  
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ],

  exports:[
    MedicosComponent,
    CommonModule

  ]
})
export class MedicosModule { }
