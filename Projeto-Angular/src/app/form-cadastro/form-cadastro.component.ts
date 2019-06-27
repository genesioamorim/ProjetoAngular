import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {



  onSubmit(form){
    console.log(form);

   }


  constructor() {


  }

  ngOnInit() {
  }

}
