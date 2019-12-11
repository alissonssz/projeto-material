import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { MapboxComponent } from './mapbox/mapbox.component';

@NgModule({
  declarations: [MapsComponent, MapboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapsComponent,
    MapboxComponent
  ]
})
export class SharedComponentsModule { }
