import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './pacientes.component';
import { EditPacientesComponent } from './edit-pacientes/edit-pacientes.component';



const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: ':id', component: EditPacientesComponent },
  { path: 'new', component: EditPacientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }