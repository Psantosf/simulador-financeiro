import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprovadoComponent } from './aprovado/aprovado.component';
import { ReprovadoComponent } from './reprovado/reprovado.component';


const routes: Routes = [
  {path: 'aprovado', component: AprovadoComponent},
  {path: 'reprovado', component: ReprovadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
