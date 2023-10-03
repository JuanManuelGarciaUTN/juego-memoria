import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './home/selector/selector.component';
import { ResultadosComponent } from './home/resultados/resultados.component';
import { DificilComponent } from './home/dificil/dificil.component';
import { MedioComponent } from './home/medio/medio.component';
import { FacilComponent } from './home/facil/facil.component';

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
    path: 'facil',
    component: FacilComponent,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'medio',
    component: MedioComponent,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dificil',
    component: DificilComponent,
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
