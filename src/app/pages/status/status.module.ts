import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { ReprovadoComponent } from './reprovado/reprovado.component';
import { AprovadoComponent } from './aprovado/aprovado.component';


@NgModule({
  declarations: [
    AprovadoComponent,
    ReprovadoComponent,
  ],
  imports: [
    StatusRoutingModule,
    SharedModule
  ]
})
export class StatusModule { }
