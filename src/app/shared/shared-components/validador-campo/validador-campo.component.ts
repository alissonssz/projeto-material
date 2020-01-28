import { Component, OnInit, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-validador-campo',
  templateUrl: './validador-campo.component.html',
  styleUrls: ['./validador-campo.component.css']
})
export class ValidadorCampoComponent implements OnInit {

  @ContentChild(FormControlName, {static: false})
  protected input: FormControlName;
  constructor() { }

  ngOnInit() {

  }

  selecionarMensagem() {
    let mensagem = '';
    Object.keys(this.input.control.errors).forEach(
      (key) => { 
        if (MensagemValidacao[key]) {
          mensagem += `${MensagemValidacao[key]} \n`;
        }

      }
    );
    return mensagem;
  }
}

enum MensagemValidacao {
  required = 'Campo obrigatório',
  email = 'E-mail inválido',
}
