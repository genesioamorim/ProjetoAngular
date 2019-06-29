import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

pacientes: any = {};


  constructor() {



  }

  listarPacientes() {
    const localPacientes = localStorage.getItem('Pacientes');
    this.pacientes = JSON.parse(localPacientes);
  }

  removePacientes(id) {
    let pacientes = [];
    let updatePacientes = [];
    const localPacientes = localStorage.getItem('Pacientes');
    pacientes = JSON.parse(localPacientes);

    // Filter and return all diff by id
    updatePacientes = pacientes.filter(item => item.id !== id);

    // Save on localstorage
    localStorage.setItem('Pacientes', JSON.stringify(updatePacientes));

    // Update table
    this.listarPacientes();
  }


  ngOnInit() {
    this.listarPacientes();

  }

}
