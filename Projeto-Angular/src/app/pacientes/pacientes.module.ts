import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRoutingModule } from './pacientes-routing.module';

import { PacientesComponent } from './pacientes.component';


@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ],
  exports:[
    PacientesComponent,
    CommonModule
  ]
})
export class PacientesModule {



 }
