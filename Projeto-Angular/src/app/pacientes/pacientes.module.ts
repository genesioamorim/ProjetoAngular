import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes.component';
import { EditPacientesComponent } from './edit-pacientes/edit-pacientes.component';


@NgModule({
  declarations: [
    PacientesComponent,
    EditPacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    FormsModule
  ],
  exports:[
    PacientesComponent,
    CommonModule
  ]
})
export class PacientesModule {



 }
