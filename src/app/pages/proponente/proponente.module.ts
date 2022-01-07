import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './../../shared/components/title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgxMaskModule } from 'ngx-mask';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule,
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
