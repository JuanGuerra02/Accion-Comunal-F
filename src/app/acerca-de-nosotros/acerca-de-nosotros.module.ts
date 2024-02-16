import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaDeNosotrosRoutingModule } from './acerca-de-nosotros-routing.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


@NgModule({
  declarations: [
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    AcercaDeNosotrosRoutingModule
  ]
})
export class AcercaDeNosotrosModule { }
