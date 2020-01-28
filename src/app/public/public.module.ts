import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from '../shared/shared-modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedDirectivesModule } from '../shared/shared-directives/shared-directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Form1Component } from './components/home/form1/form1.component';
import { Form2Component } from './components/home/form2/form2.component';
import { EventEmitterService } from './services/event-emitter.service';
import { GerenciarSalvarService } from './services/gerenciar-salvar.service';

@NgModule({
  declarations: [HomeComponent, Form1Component, Form2Component],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule
  ],
  providers: [
    EventEmitterService,
    GerenciarSalvarService
  ],
  exports: [HomeComponent]
})
export class PublicModule { }
