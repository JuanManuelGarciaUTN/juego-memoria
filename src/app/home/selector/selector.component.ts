import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent  implements OnInit {

  public jugando = false;
  public dificultad: Dificultad = 1;

  constructor(private router: Router, private db: BaseDeDatosService) { }

  ngOnInit() {}

  cerrarSesion(){
    this.db.usuario = undefined;
    this.router.navigate(['home']);
  }

  accederPuntajes(){
    this.db.usuario = undefined;
    this.router.navigate(['resultados']);
  }

  IniciarFacil(){
    this.jugando = true;
    this.dificultad = Dificultad.facil;
  }

  IniciarMedio(){
    this.jugando = true;
    this.dificultad = Dificultad.medio;
  }

  IniciarDificil(){
    this.jugando = true;
    this.dificultad = Dificultad.dificil;
  }
}

export enum Dificultad{
  facil,
  medio,
  dificil
}
