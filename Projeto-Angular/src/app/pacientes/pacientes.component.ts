import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  filtrar(busca:NgForm){
  let Busca = busca.value
  let Pbusca= Busca.Busca;
  let filtro =[]
  const localPacientes = localStorage.getItem('Pacientes');
  this.pacientes = JSON.parse(localPacientes);
  filtro = this.pacientes.filter(item=> item.nome === Pbusca)

  localStorage.setItem('busca', JSON.stringify(filtro));

    const localbusca = localStorage.getItem('busca');
    this.pacientes = JSON.parse(localbusca);

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
