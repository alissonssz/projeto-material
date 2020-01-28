import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidacaoCampoDirective } from './validacao-campo/validacao-campo.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValidacaoCampoDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ValidacaoCampoDirective
  ]
})
export class SharedDirectivesModule { }
