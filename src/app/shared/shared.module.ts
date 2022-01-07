import { TitleComponent } from './components/title/title.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { IMaskModule } from 'angular-imask';


@NgModule({
  declarations:[TitleComponent],
  imports: [
    MaterialModule,
    IMaskModule,
  ],
  exports: [
    TitleComponent,
    MaterialModule,
    IMaskModule,
  ]
})
export class SharedModule { }
