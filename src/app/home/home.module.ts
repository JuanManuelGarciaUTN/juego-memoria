import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { JuegoComponent } from './juego/juego.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SelectorComponent, JuegoComponent, ResultadosComponent]
})
export class HomePageModule {}
