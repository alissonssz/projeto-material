import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitterService } from 'src/app/public/services/event-emitter.service';
import { GerenciarSalvarService } from 'src/app/public/services/gerenciar-salvar.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private gerenciarSalvarService: GerenciarSalvarService) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.observarSalvar();
  }

  observarSalvar() {
    this.gerenciarSalvarService.gerenciarSalvarGeral.subscribe(
      () => {
        this.gerenciarSalvarService.gerenciarSalvarForm1.next({identificacao: 'form1', form: this.form.getRawValue()});
      }
    )
  }

  inicializarFormulario() {
    this.form = this.formBuilder.group(
      {
        nome: [null, Validators.required],
        idade: [null],
        telefone: [null]
      }
    );
  }

}
