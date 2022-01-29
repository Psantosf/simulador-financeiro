import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ImoveisRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
  ]
})
export class ImoveisModule { }
