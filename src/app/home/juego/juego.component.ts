import { Component, Input, OnInit } from '@angular/core';
import { Dificultad } from '../selector/selector.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss'],
})
export class JuegoComponent {

  @Input() dificultad: Dificultad = Dificultad.facil;

  constructor() { }

}
