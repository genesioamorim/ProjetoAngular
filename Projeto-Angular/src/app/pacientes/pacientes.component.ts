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


  onSubmit(form: NgForm){
    let paciente = [];
    let pesquisa =[];
    paciente = JSON.parse( localStorage.getItem("Pacientes"));;

    pesquisa = paciente.filter(
      item=> item.nome === form

      )
      localStorage.setItem('pesquisa', JSON.stringify(pesquisa));


      this.pacientes = JSON.parse( localStorage.getItem("pesquisa"));

  }

  ngOnInit() {
  this.pacientes = JSON.parse( localStorage.getItem("Pacientes"));

  }

}
