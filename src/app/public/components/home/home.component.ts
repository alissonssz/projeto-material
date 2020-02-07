import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, forkJoin, merge } from 'rxjs';
import { GerenciarSalvarService } from '../../services/gerenciar-salvar.service';
import { last } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  formHome: FormGroup;
  mapCentral: Map<string, any>;

  constructor(private formBuilder: FormBuilder, private gerenciarSalvarService: GerenciarSalvarService) { }

  ngOnInit() {
    this.formHome = this.formBuilder.group(
      {
        nome: [null, [Validators.required]],
        idade: [null, [Validators.required]],
        apelido: [null],
        email: [null, [Validators.required, Validators.email]]
      }
    );
    this.observarSalvar();
    this.mapCentral = new Map<string, any>();
  }

  observarSalvar() {
    merge(
      this.gerenciarSalvarService.gerenciarSalvarForm1,
      this.gerenciarSalvarService.gerenciarSalvarForm2,
      this.gerenciarSalvarService.gerenciarSalvarForm3
    ).pipe().
      subscribe(
        (res: Form) => {
          this.mapCentral.set(res.identificacao, res.form)
          if (this.mapCentral.size === 3) {
            this.salvar(this.mapCentral);
          }
        }
      );
  }

  salvar(form: Map<string, any>) {
    if (form.size === 3) {
      console.log('realiza salvar', form);
      console.log('form1', form.get('form1'));
      console.log('form2', form.get('form2'));
      console.log('form3', form.get('form3'));
      // Realiza o salvar
      this.mapCentral = null;
    }
    
  }
  
  ngAfterViewInit(): void {

  }
  
 
  salvarGeral() {
    this.gerenciarSalvarService.gerenciarSalvarGeral.next(true);
  }

}

type Form = {identificacao: string, form: any}
