import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-pacientes',
  templateUrl: './edit-pacientes.component.html',
  styleUrls: ['./edit-pacientes.component.scss']
})
export class EditPacientesComponent implements OnInit {
  public id: any
  public paciente: any = {};
  public create: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  updatePacientes(form:NgForm) {

    let paciente: any = {};
    paciente = form.value;
    paciente.id = Number(this.id);


    // Get Products on localstorage
    let localStringPacientes = localStorage.getItem('Pacientes');
    let localArrayPacientes = JSON.parse(localStringPacientes);
    // Update list product
    console.log(paciente);
    console.log(paciente.id);
    console.log(typeof (paciente.id));
    for (let index = 0; index < localArrayPacientes.length; index++) {
      if(localArrayPacientes[index].id === paciente.id){

        localArrayPacientes[index] = paciente;

     }
    }




    // Update Product on localstorage
    let listaToString = JSON.stringify(localArrayPacientes);
    localStorage.setItem('Pacientes', listaToString);
    form.resetForm();

  }

  _findPacientesLocalStorage(id:any) {
    const localStringPacientes = localStorage.getItem('Pacientes');
    const localArrayPacientes = JSON.parse(localStringPacientes);

     const getPaciente = localArrayPacientes.filter(item => {
      if (item.id === id) {
        return true;
      }
     });

      if (getPaciente.length > 0) {
        return getPaciente[0];
      } else {
        return null;
      }

  }

  ngOnInit() {

    const { id } = this.route.snapshot.params;
    this.id = id;

    if (id === 'new') {
      this.create = true;
    } else {
      const findPaciente = this._findPacientesLocalStorage( Number(id) );
      // Find product
      if (findPaciente) {
        this.paciente = findPaciente;
        this.create = false;
      } else {
      // Redirect if id not exists
        this.router.navigate(['/', 'pacientes']);
      }
    }
  }


  }


