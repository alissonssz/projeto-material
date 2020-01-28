import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GerenciarSalvarService {
  
  gerenciarSalvarForm1: BehaviorSubject<any>;
  gerenciarSalvarForm2: BehaviorSubject<any>;
  gerenciarSalvarGeral: BehaviorSubject<any>;
  constructor() { 
    this.gerenciarSalvarForm1 = new BehaviorSubject<any>(null);
    this.gerenciarSalvarForm2 = new BehaviorSubject<any>(null);
    this.gerenciarSalvarGeral = new BehaviorSubject<any>(null);
  }

  getGerenciar1() {
    return this.gerenciarSalvarForm1;
  }

  getGerenciar2() {
    return this.gerenciarSalvarForm2;
  }


  renovarInstancia1() {
    this.gerenciarSalvarForm1 = null;
    this.gerenciarSalvarForm1 = new BehaviorSubject<any>(null);
  }

  renovarInstancia2() {
    this.gerenciarSalvarForm2 = null;
    this.gerenciarSalvarForm2 = new BehaviorSubject<any>(null);
  }
}
