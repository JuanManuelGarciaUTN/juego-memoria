import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './home/selector/selector.component';
import { ResultadosComponent } from './home/resultados/resultados.component';
import { JuegoComponent } from './home/juego/juego.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'selector',
    component: SelectorComponent,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'resultados',
    component: ResultadosComponent,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
