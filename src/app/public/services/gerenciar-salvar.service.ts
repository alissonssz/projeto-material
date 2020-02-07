import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class GerenciarSalvarService {
  
  gerenciarSalvarForm1: Subject<Form>;
  gerenciarSalvarForm2: Subject<Form>;
  gerenciarSalvarForm3: Subject<Form>;
  gerenciarSalvarGeral: Subject<any>;

  constructor() { 
    this.gerenciarSalvarForm1 = new Subject<Form>();
    this.gerenciarSalvarForm2 = new Subject<Form>();
    this.gerenciarSalvarForm3 = new Subject<Form>();
    this.gerenciarSalvarGeral = new Subject<any>();
  }

}

type Form = {identificacao: string, form: any}
