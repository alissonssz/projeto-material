import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { StatusCampos } from './Status-campos.enum';

@Directive({
  selector: '[appValidacaoCampo]'
})
export class ValidacaoCampoDirective implements OnInit, AfterViewInit {
  
  constructor(
    private el: ElementRef,
    private control : NgControl,
    private renderer: Renderer2
  ) { }
  matError
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.control.valueChanges.subscribe(valor => console.log('valor', valor))
    this.control.statusChanges.subscribe( status => this.adicionarMensagem(status));
    console.log('pai', this.el);
    
  }

  adicionarMensagem(status: string) {
    console.log('status', status);
    if (StatusCampos.INVALID === status) {
      this.matError = this.renderer.createElement('mat-error');
      const text = this.renderer.createText('Campo Obrigatórioo');
      this.renderer.appendChild(this.matError, text);
      this.renderer.appendChild(this.el.nativeElement, this.matError);
      console.log('matError', this.matError);
    } else if(this.matError){
      this.renderer.removeChild(this.el.nativeElement, this.matError);
    }
  }



}
