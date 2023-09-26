import { Component, OnInit } from '@angular/core';
import { Tiempo } from 'src/app/interfaces/tiempo';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent {

  public facil:Tiempo[] = [];
  public medio:Tiempo[] = [];
  public dificil:Tiempo[] = [];

  constructor(private db: BaseDeDatosService) {
    let sub1 = this.db.obtenerTiemposFacil().subscribe((datos)=>{
      sub1.unsubscribe();
      this.facil = datos;
    })

    let sub2 = this.db.obtenerTiemposMedio().subscribe((datos)=>{
      sub2.unsubscribe();
      this.medio = datos;
    })

    let sub3 = this.db.obtenerTiemposDificil().subscribe((datos)=>{
      sub3.unsubscribe();
      this.dificil = datos;
    })
   }
}
