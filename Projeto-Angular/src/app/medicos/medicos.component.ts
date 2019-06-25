import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  medico: any;
  medicos: any[]=[
    {nome:"Dr Roberto Sales", id:1, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:2, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:3, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:4, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:5, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:6, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:7, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:8, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:9, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"},
    {nome:"Dr Roberto Sales", id:10, atua:"atua como cardiologista", src:"./assets/img/male-dentist.jpg"}

  ];

  constructor(private modalService: NgbModal ) {
    
  }
  
  VerPacientes(modal){
    
    this.modalService.open(modal);

      
  }
  

  ngOnInit() {
  }

}
