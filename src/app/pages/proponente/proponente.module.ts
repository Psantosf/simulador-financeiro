import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ProponenteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    ],
    providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
    ]
})
export class ProponenteModule { }
