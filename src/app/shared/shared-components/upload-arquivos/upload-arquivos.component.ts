import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-upload-arquivos',
  templateUrl: './upload-arquivos.component.html',
  styleUrls: ['./upload-arquivos.component.css']
})
export class UploadArquivosComponent implements OnInit, AfterViewInit {
  
  @ViewChild('input', {static: false}) file: ElementRef;
  
  constructor() { }
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.file.nativeElement.onchange = () => console.log("ola")
  }

  abrirInput() {
    this.file.nativeElement.click();
  }
  

}
