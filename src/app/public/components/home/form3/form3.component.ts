import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GerenciarSalvarService } from 'src/app/public/services/gerenciar-salvar.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private gerenciarSalvarService: GerenciarSalvarService) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.observarSalvar();
  }

  observarSalvar() {
    this.gerenciarSalvarService.gerenciarSalvarGeral.subscribe(
      () => {
        this.gerenciarSalvarService.gerenciarSalvarForm3.next({identificacao: 'form3', form: this.form.getRawValue()});
      }
    )
  }

  inicializarFormulario() {
    this.form = this.formBuilder.group(
      {
        nome: [null, Validators.required],
        idade: [null]
      }
    );
  }

}
