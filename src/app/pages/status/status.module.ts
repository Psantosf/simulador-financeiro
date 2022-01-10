import { SharedModule } from 'src/app/shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
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
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
],
})
export class StatusModule { }
