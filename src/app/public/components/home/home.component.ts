import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, forkJoin } from 'rxjs';
import { GerenciarSalvarService } from '../../services/gerenciar-salvar.service';
import { takeLast } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  formHome: FormGroup;

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
  }

  observarSalvar() {
    combineLatest([
      this.gerenciarSalvarService.gerenciarSalvarForm1,
      this.gerenciarSalvarService.gerenciarSalvarForm2
    ]).pipe().
      subscribe(
        (res) => {
          console.log('res', res);
          
        }
      );
  }
  
  ngAfterViewInit(): void {

  }
  

  salvarGeral() {
    this.gerenciarSalvarService.gerenciarSalvarGeral.next(true);
  }

}
