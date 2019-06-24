import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
    { path: 'cadastro', loadChildren: './form-cadastro/form-cadastro.module#FormCadastroModule'},
    { path: 'medicos', loadChildren: './medicos/medicos.module#MedicosModule'},
    { path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesModule'},
    { path: '**', redirectTo: 'cadastro' }
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        
    
    ],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }