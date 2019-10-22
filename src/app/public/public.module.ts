import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from '../shared/shared-modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [HomeComponent]
})
export class PublicModule { }
