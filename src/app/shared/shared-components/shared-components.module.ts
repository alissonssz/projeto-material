import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { UploadArquivosComponent } from './upload-arquivos/upload-arquivos.component';
import { AngularMaterialModule } from '../shared-modules/angular-material/angular-material.module';

@NgModule({
  declarations: [MapsComponent, MapboxComponent, UploadArquivosComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    MapsComponent,
    MapboxComponent,
    UploadArquivosComponent
  ]
})
export class SharedComponentsModule { }
