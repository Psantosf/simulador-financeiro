import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)  },
  { path: 'proponente', loadChildren: () => import('./pages/proponente/proponente.module').then(m => m.ProponenteModule)  },
  { path: 'imoveis', loadChildren: () => import('./pages/imoveis/imoveis.module').then(m => m.ImoveisModule)  },
  { path: 'status', loadChildren: () => import('./pages/status/status.module').then(m => m.StatusModule)  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
