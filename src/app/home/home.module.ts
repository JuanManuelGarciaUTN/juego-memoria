import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FacilComponent } from './facil/facil.component';
import { MedioComponent } from './medio/medio.component';
import { DificilComponent } from './dificil/dificil.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SelectorComponent, FacilComponent, MedioComponent, DificilComponent, ResultadosComponent]
})
export class HomePageModule {}
