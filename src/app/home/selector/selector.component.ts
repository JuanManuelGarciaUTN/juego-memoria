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

  constructor(private router: Router) { }

  ngOnInit() {}

  cerrarSesion(){
    this.router.navigate(['home']);
  }

  accederPuntajes(){
    this.router.navigate(['resultados']);
  }

  IniciarFacil(){
    this.router.navigate(['facil']);
  }

  IniciarMedio(){
    this.router.navigate(['medio']);
  }

  IniciarDificil(){
    this.router.navigate(['dificil']);
  }
}
